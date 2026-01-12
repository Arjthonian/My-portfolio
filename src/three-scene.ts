import * as THREE from 'three';


export class ThreeScene {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private shapes: THREE.Mesh[] = [];
  private mouse = { x: 0, y: 0 };
  private targetMouse = { x: 0, y: 0 };
  private animationId: number | null = null;

  constructor(canvas: HTMLCanvasElement) {
    // Initialize scene
    this.scene = new THREE.Scene();
    
    // Setup camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;

    // Setup renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create floating shapes
    this.createFloatingShapes();

    // Add ambient lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    // Add point lights for glow effect
    const pointLight1 = new THREE.PointLight(0x00f0ff, 2, 100);
    pointLight1.position.set(5, 5, 5);
    this.scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xa855f7, 2, 100);
    pointLight2.position.set(-5, -5, 5);
    this.scene.add(pointLight2);

    // Event listeners
    this.setupEventListeners();

    // Start animation loop
    this.animate();
  }

  private createFloatingShapes(): void {
    const geometries = [
      new THREE.IcosahedronGeometry(0.5, 0),
      new THREE.OctahedronGeometry(0.6, 0),
      new THREE.TetrahedronGeometry(0.7, 0),
      new THREE.TorusGeometry(0.4, 0.15, 16, 100),
      new THREE.BoxGeometry(0.6, 0.6, 0.6),
    ];

    const materials = [
      new THREE.MeshPhysicalMaterial({
        color: 0x00f0ff,
        metalness: 0.8,
        roughness: 0.2,
        transparent: true,
        opacity: 0.6,
        wireframe: false,
      }),
      new THREE.MeshPhysicalMaterial({
        color: 0xa855f7,
        metalness: 0.8,
        roughness: 0.2,
        transparent: true,
        opacity: 0.6,
        wireframe: false,
      }),
      new THREE.MeshPhysicalMaterial({
        color: 0x3b82f6,
        metalness: 0.8,
        roughness: 0.2,
        transparent: true,
        opacity: 0.6,
        wireframe: false,
      }),
    ];

    // Create multiple floating shapes at different positions
    const positions = [
      { x: -3, y: 2, z: -2 },
      { x: 3, y: -1, z: -3 },
      { x: -2, y: -2, z: -1 },
      { x: 2.5, y: 1.5, z: -2.5 },
      { x: 0, y: 3, z: -4 },
      { x: -3.5, y: -1.5, z: -3 },
      { x: 1, y: -3, z: -2 },
    ];

    positions.forEach((pos, index) => {
      const geometry = geometries[index % geometries.length];
      const material = materials[index % materials.length].clone();
      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.position.set(pos.x, pos.y, pos.z);
      
      // Store initial position for floating animation
      (mesh.userData as any).initialY = pos.y;
      (mesh.userData as any).floatSpeed = 0.5 + Math.random() * 0.5;
      (mesh.userData as any).floatOffset = Math.random() * Math.PI * 2;
      (mesh.userData as any).rotationSpeed = {
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.01,
      };

      this.shapes.push(mesh);
      this.scene.add(mesh);
    });
  }

  private setupEventListeners(): void {
    // Mouse move for interactive parallax
    window.addEventListener('mousemove', (event) => {
      this.targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Handle window resize
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Handle scroll for depth effect
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollY / maxScroll;
      
      this.shapes.forEach((shape, index) => {
        shape.position.z = -2 - (scrollProgress * 5) + (index * 0.3);
      });
    });
  }

  private animate = (): void => {
    this.animationId = requestAnimationFrame(this.animate);

    // Smooth mouse following
    this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.05;
    this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.05;

    // Animate each shape
    this.shapes.forEach((shape, index) => {
      const userData = shape.userData as any;
      const time = Date.now() * 0.001;

      // Floating animation
      shape.position.y = 
        userData.initialY + 
        Math.sin(time * userData.floatSpeed + userData.floatOffset) * 0.3;

      // Rotation
      shape.rotation.x += userData.rotationSpeed.x;
      shape.rotation.y += userData.rotationSpeed.y;
      shape.rotation.z += userData.rotationSpeed.z;

      // Mouse interaction - parallax effect
      const parallaxStrength = (index % 3 + 1) * 0.3;
      shape.position.x += (this.mouse.x * parallaxStrength - (shape.position.x - userData.initialX || 0)) * 0.05;
      
      // Subtle scale pulsing
      const scale = 1 + Math.sin(time * 2 + index) * 0.05;
      shape.scale.set(scale, scale, scale);
    });

    // Render the scene
    this.renderer.render(this.scene, this.camera);
  };

  public dispose(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
    }
    
    this.shapes.forEach(shape => {
      shape.geometry.dispose();
      if (shape.material instanceof THREE.Material) {
        shape.material.dispose();
      }
    });
    
    this.renderer.dispose();
  }
}
