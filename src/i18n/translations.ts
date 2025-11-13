export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      skills: "Habilidades",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      title: "Full Stack Developer • AI Developer",
      subtitle: "Java • Spring Boot • Inteligencia Artificial",
      location: "🇦🇷 Argentina | Construyendo el futuro, una línea de código a la vez",
      viewProjects: "Ver Proyectos",
      contact: "Contactar",
    },
    about: {
      title: "Sobre Mí",
      description: "Soy un desarrollador Full Stack con más de 6 años de experiencia en el desarrollo de soluciones tecnológicas innovadoras. Mi especialización está en Java y Spring Boot, con un enfoque en arquitecturas de microservicios y desarrollo de aplicaciones escalables. He trabajado con clientes internacionales, incluyendo proyectos en Estados Unidos y España, donde he implementado soluciones backend robustas e interfaces frontend modernas con Angular y React. Mi experiencia también incluye el desarrollo de sistemas de pagos, billeteras virtuales, y la integración de inteligencia artificial para optimizar procesos empresariales.",
      yearsExperience: "Años de Experiencia en Desarrollo",
      cleanCode: "Clean Code",
      cleanCodeDesc: "Código limpio y mantenible",
      innovation: "Innovación",
      innovationDesc: "Soluciones creativas y efectivas",
      performance: "Performance",
      performanceDesc: "Optimización y escalabilidad",
    },
    skills: {
      title: "Habilidades & Tecnologías",
      backend: "Backend",
      frontend: "Frontend",
      database: "Base de Datos",
      cloud: "Cloud & DevOps",
      security: "Seguridad & Monitoreo",
      tools: "Tools & Metodologías",
    },
    experience: {
      title: "Experiencia",
      present: "Actualidad",
      exp1: {
        title: "Full Stack Developer • Contractor",
        company: "Proyectos Internacionales",
        period: "2024 - Actualidad",
        description: "Desarrollo de soluciones fullstack para diferentes clientes internacionales. Implementación de arquitecturas de microservicios con Java y Spring Boot, desarrollo frontend con Angular, y gestión de bases de datos relacionales y no relacionales. Aplicación de metodologías ágiles y buenas prácticas de desarrollo.",
      },
      exp2: {
        title: "Full Stack Developer • AI Developer",
        company: "Bizit Global",
        period: "Mayo 2022 - 2024",
        description: "Desarrollo de soluciones tecnológicas innovadoras para clientes internacionales. Trabajo con Shipium (EEUU) y Grupo Carreras (España), desarrollando backend con Java y Spring Boot, frontend con Angular, implementando arquitecturas de microservicios y trabajando con bases de datos relacionales y no relacionales. Optimización de procesos mediante ingeniería de prompts e inteligencia artificial.",
      },
      exp3: {
        title: "Programador Java",
        company: "Banco Hipotecario - MODO (billetera virtual)",
        period: "2019 - 2022",
        description: "Desarrollo y mantenimiento de la plataforma de billetera virtual MODO. Implementación de APIs REST, integración de servicios de pago, y desarrollo de arquitecturas de microservicios. Trabajo con bases de datos Oracle y PostgreSQL, monitoreo con DataDog, y despliegues en OpenShift con Jenkins.",
      },
    },
    projects: {
      title: "Proyectos Destacados",
      comingSoon: "¡Próximamente Disponible!",
      comingSoonDesc: "Estoy trabajando en preparar el código y las demos de mis proyectos. Pronto estarán disponibles para que puedas explorarlos.",
      understand: "Entendido",
      code: "Código",
      demo: "Demo",
      viewDemo: "Ver Demo",
      closeDemo: "Cerrar",
      codeExample: "Ejemplo de Código",
      note: "Nota: Los repositorios completos son privados por ser parte de proyectos comerciales.",
      project1: {
        title: "Seguridad con Keycloak",
        description: "Implementación de sistema de autenticación y autorización empresarial con Keycloak, incluyendo SSO, gestión de usuarios, y políticas de seguridad en microservicios.",
        demoTitle: "🔐 Sistema de Seguridad Empresarial",
        demoFeatures: [
          "Single Sign-On (SSO) - Autenticación única en múltiples aplicaciones",
          "OAuth 2.0 & OpenID Connect - Protocolos estándar de autenticación",
          "Gestión de Roles y Permisos - Control de acceso basado en roles (RBAC)",
          "Integración con Spring Security - Protección de endpoints REST",
          "Multi-Factor Authentication (MFA) - Seguridad adicional con 2FA",
          "Session Management - Control y monitoreo de sesiones activas"
        ],
        demoTech: "Implementado con Keycloak 21+, Spring Boot 3, JWT tokens, y PostgreSQL para almacenamiento persistente de usuarios y configuraciones.",
        codeExample: `@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .oauth2ResourceServer(oauth2 -> oauth2
                .jwt(jwt -> jwt.jwtAuthenticationConverter(jwtAuthenticationConverter()))
            );
        return http.build();
    }

    @Bean
    public JwtAuthenticationConverter jwtAuthenticationConverter() {
        JwtAuthenticationConverter converter = new JwtAuthenticationConverter();
        converter.setJwtGrantedAuthoritiesConverter(new KeycloakRoleConverter());
        return converter;
    }
}

public class KeycloakRoleConverter implements Converter<Jwt, Collection<GrantedAuthority>> {
    @Override
    public Collection<GrantedAuthority> convert(Jwt jwt) {
        Map<String, Object> realmAccess = jwt.getClaim("realm_access");
        if (realmAccess == null) return Collections.emptyList();
        
        List<String> roles = (List<String>) realmAccess.get("roles");
        return roles.stream()
            .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
            .collect(Collectors.toList());
    }
}`
      },
      project2: {
        title: "Sistema de Pago sin Contacto NFC",
        description: "Desarrollo de solución de pagos sin contacto utilizando tecnología NFC, integrando pasarelas de pago y cumpliendo con estándares de seguridad PCI-DSS.",
        demoTitle: "💳 Pagos Contactless NFC",
        demoFeatures: [
          "Lectura NFC - Procesamiento de tarjetas y dispositivos móviles",
          "Tokenización de Pagos - Protección de datos sensibles",
          "Integración Gateway - Conexión con procesadores de pago",
          "PCI-DSS Compliance - Cumplimiento de estándares de seguridad",
          "Transacciones en Tiempo Real - Validación y autorización instantánea",
          "Sistema de Reconciliación - Control y auditoría de operaciones"
        ],
        demoTech: "Desarrollado con Java 11, Spring Boot, APIs REST, y protocolos de seguridad EMV para garantizar transacciones seguras.",
        codeExample: `@Service
public class NFCPaymentService {

    private final PaymentGatewayClient gatewayClient;
    private final TokenizationService tokenizationService;
    
    public PaymentResponse processNFCPayment(NFCPaymentRequest request) {
        // Validar datos de la tarjeta NFC
        validateNFCData(request.getNfcData());
        
        // Tokenizar información sensible
        String token = tokenizationService.tokenize(request.getCardData());
        
        // Crear transacción
        Transaction transaction = Transaction.builder()
            .amount(request.getAmount())
            .currency(request.getCurrency())
            .cardToken(token)
            .merchantId(request.getMerchantId())
            .timestamp(Instant.now())
            .build();
        
        // Procesar pago a través de gateway
        PaymentResponse response = gatewayClient.processPayment(transaction);
        
        if (response.isSuccessful()) {
            // Registrar transacción exitosa
            transactionRepository.save(transaction);
            notificationService.sendPaymentConfirmation(response);
        }
        
        return response;
    }
    
    private void validateNFCData(String nfcData) {
        if (!nfcData.matches("^[A-F0-9]{32}$")) {
            throw new InvalidNFCDataException("Datos NFC inválidos");
        }
    }
}

@RestController
@RequestMapping("/api/payments")
public class PaymentController {
    
    @PostMapping("/nfc")
    public ResponseEntity<PaymentResponse> processNFCPayment(
            @Valid @RequestBody NFCPaymentRequest request) {
        PaymentResponse response = paymentService.processNFCPayment(request);
        return ResponseEntity.ok(response);
    }
}`
      },
      project3: {
        title: "CashBack Bancario - Billetera Virtual",
        description: "Sistema de billetera virtual con funcionalidad de cashback para el Banco Hipotecario (MODO). Gestión de transacciones, saldos, y promociones en tiempo real.",
        demoTitle: "💰 Billetera Virtual MODO",
        demoFeatures: [
          "Gestión de Saldos - Control de cuentas y movimientos en tiempo real",
          "Sistema de CashBack - Acreditación automática de reembolsos",
          "Motor de Promociones - Aplicación de descuentos y beneficios",
          "Transferencias P2P - Envío y recepción entre usuarios",
          "Historial de Transacciones - Registro completo de operaciones",
          "Notificaciones Push - Alertas en tiempo real de movimientos"
        ],
        demoTech: "Arquitectura de microservicios con Spring Boot, PostgreSQL y Oracle, procesamiento asíncrono con RabbitMQ, y deployment en OpenShift.",
        codeExample: `@Service
@Transactional
public class CashbackService {

    private final WalletRepository walletRepository;
    private final TransactionRepository transactionRepository;
    
    public CashbackResponse processCashback(Transaction transaction) {
        // Calcular cashback según categoría
        BigDecimal cashbackAmount = calculateCashback(
            transaction.getAmount(), 
            transaction.getCategory()
        );
        
        // Obtener billetera del usuario
        Wallet wallet = walletRepository.findByUserId(transaction.getUserId())
            .orElseThrow(() -> new WalletNotFoundException());
        
        // Acreditar cashback
        wallet.setBalance(wallet.getBalance().add(cashbackAmount));
        wallet.setPointsBalance(wallet.getPointsBalance() + convertToPoints(cashbackAmount));
        
        // Registrar transacción de cashback
        CashbackTransaction cashback = CashbackTransaction.builder()
            .userId(transaction.getUserId())
            .originalTransactionId(transaction.getId())
            .amount(cashbackAmount)
            .points(convertToPoints(cashbackAmount))
            .status(TransactionStatus.COMPLETED)
            .timestamp(Instant.now())
            .build();
        
        transactionRepository.save(cashback);
        walletRepository.save(wallet);
        
        return CashbackResponse.builder()
            .cashbackAmount(cashbackAmount)
            .newBalance(wallet.getBalance())
            .pointsEarned(convertToPoints(cashbackAmount))
            .build();
    }
    
    private BigDecimal calculateCashback(BigDecimal amount, Category category) {
        return amount.multiply(category.getCashbackPercentage())
                    .setScale(2, RoundingMode.HALF_UP);
    }
}`
      },
      project4: {
        title: "Arquitectura de Microservicios",
        description: "Diseño e implementación de arquitectura de microservicios escalable con Spring Cloud, discovery services, API Gateway, y orquestación con Kubernetes.",
        demoTitle: "🚀 Arquitectura Cloud-Native",
        demoFeatures: [
          "API Gateway - Punto único de entrada y enrutamiento inteligente",
          "Service Discovery - Registro y localización automática con Eureka",
          "Load Balancing - Distribución de carga entre instancias",
          "Circuit Breaker - Resiliencia con Resilience4j",
          "Configuración Centralizada - Spring Cloud Config Server",
          "Observabilidad - Monitoreo con Micrometer, DataDog y logs centralizados"
        ],
        demoTech: "Stack completo con Spring Cloud, Kubernetes para orquestación, Docker para contenedores, Jenkins para CI/CD, y monitoreo con DataDog.",
        codeExample: `@Configuration
public class GatewayConfig {
    
    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
            .route("user-service", r -> r
                .path("/api/users/**")
                .filters(f -> f
                    .circuitBreaker(c -> c
                        .setName("userServiceCircuitBreaker")
                        .setFallbackUri("forward:/fallback/users"))
                    .retry(retryConfig -> retryConfig.setRetries(3)))
                .uri("lb://USER-SERVICE"))
            .route("payment-service", r -> r
                .path("/api/payments/**")
                .filters(f -> f
                    .circuitBreaker(c -> c
                        .setName("paymentServiceCircuitBreaker"))
                    .requestRateLimiter(rl -> rl
                        .setRateLimiter(redisRateLimiter())))
                .uri("lb://PAYMENT-SERVICE"))
            .build();
    }
}

@Service
public class ExternalApiService {
    
    @CircuitBreaker(name = "externalApi", fallbackMethod = "fallbackMethod")
    @Retry(name = "externalApi")
    public ResponseEntity<Data> callExternalApi(String id) {
        return restTemplate.getForEntity(
            "http://external-service/api/data/" + id, 
            Data.class
        );
    }
    
    public ResponseEntity<Data> fallbackMethod(String id, Exception e) {
        return ResponseEntity.ok(Data.getDefaultData());
    }
}`
      },
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Interesado en trabajar juntos? ¡Hablemos!",
      email: "Email",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      location: "Ubicación",
      sendWhatsApp: "Enviar WhatsApp",
      sendEmail: "Enviar Email",
    },
    footer: {
      madeWith: "Hecho con",
      by: "por Lucas Kinderknech",
      rights: "Todos los derechos reservados",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "Full Stack Developer • AI Developer",
      subtitle: "Java • Spring Boot • Artificial Intelligence",
      location: "🇦🇷 Argentina | Building the future, one line of code at a time",
      viewProjects: "View Projects",
      contact: "Contact",
    },
    about: {
      title: "About Me",
      description: "I am a Full Stack Developer with over 6 years of experience in developing innovative technological solutions. My specialization is in Java and Spring Boot, with a focus on microservices architectures and scalable application development. I have worked with international clients, including projects in the United States and Spain, where I have implemented robust backend solutions and modern frontend interfaces with Angular and React. My experience also includes payment system development, virtual wallets, and artificial intelligence integration to optimize business processes.",
      yearsExperience: "Years of Development Experience",
      cleanCode: "Clean Code",
      cleanCodeDesc: "Clean and maintainable code",
      innovation: "Innovation",
      innovationDesc: "Creative and effective solutions",
      performance: "Performance",
      performanceDesc: "Optimization and scalability",
    },
    skills: {
      title: "Skills & Technologies",
      backend: "Backend",
      frontend: "Frontend",
      database: "Database",
      cloud: "Cloud & DevOps",
      security: "Security & Monitoring",
      tools: "Tools & Methodologies",
    },
    experience: {
      title: "Experience",
      present: "Present",
      exp1: {
        title: "Full Stack Developer • Contractor",
        company: "International Projects",
        period: "2024 - Present",
        description: "Development of fullstack solutions for different international clients. Implementation of microservices architectures with Java and Spring Boot, frontend development with Angular, and management of relational and non-relational databases. Application of agile methodologies and development best practices.",
      },
      exp2: {
        title: "Full Stack Developer • AI Developer",
        company: "Bizit Global",
        period: "May 2022 - 2024",
        description: "Development of innovative technological solutions for international clients. Work with Shipium (USA) and Grupo Carreras (Spain), developing backend with Java and Spring Boot, frontend with Angular, implementing microservices architectures and working with relational and non-relational databases. Process optimization through prompt engineering and artificial intelligence.",
      },
      exp3: {
        title: "Java Programmer",
        company: "Banco Hipotecario - MODO (virtual wallet)",
        period: "2019 - 2022",
        description: "Development and maintenance of the MODO virtual wallet platform. Implementation of REST APIs, payment service integration, and microservices architecture development. Work with Oracle and PostgreSQL databases, monitoring with DataDog, and deployments on OpenShift with Jenkins.",
      },
    },
    projects: {
      title: "Featured Projects",
      comingSoon: "Coming Soon!",
      comingSoonDesc: "I'm working on preparing the code and demos of my projects. They will be available soon for you to explore.",
      understand: "Got it",
      code: "Code",
      demo: "Demo",
      viewDemo: "View Demo",
      closeDemo: "Close",
      codeExample: "Code Example",
      note: "Note: Full repositories are private as they are part of commercial projects.",
      project1: {
        title: "Security with Keycloak",
        description: "Implementation of enterprise authentication and authorization system with Keycloak, including SSO, user management, and security policies in microservices.",
        demoTitle: "🔐 Enterprise Security System",
        demoFeatures: [
          "Single Sign-On (SSO) - Single authentication across multiple applications",
          "OAuth 2.0 & OpenID Connect - Standard authentication protocols",
          "Role & Permission Management - Role-based access control (RBAC)",
          "Spring Security Integration - REST endpoint protection",
          "Multi-Factor Authentication (MFA) - Additional 2FA security",
          "Session Management - Active session control and monitoring"
        ],
        demoTech: "Implemented with Keycloak 21+, Spring Boot 3, JWT tokens, and PostgreSQL for persistent user and configuration storage.",
        codeExample: `@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .oauth2ResourceServer(oauth2 -> oauth2
                .jwt(jwt -> jwt.jwtAuthenticationConverter(jwtAuthenticationConverter()))
            );
        return http.build();
    }

    @Bean
    public JwtAuthenticationConverter jwtAuthenticationConverter() {
        JwtAuthenticationConverter converter = new JwtAuthenticationConverter();
        converter.setJwtGrantedAuthoritiesConverter(new KeycloakRoleConverter());
        return converter;
    }
}

public class KeycloakRoleConverter implements Converter<Jwt, Collection<GrantedAuthority>> {
    @Override
    public Collection<GrantedAuthority> convert(Jwt jwt) {
        Map<String, Object> realmAccess = jwt.getClaim("realm_access");
        if (realmAccess == null) return Collections.emptyList();
        
        List<String> roles = (List<String>) realmAccess.get("roles");
        return roles.stream()
            .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
            .collect(Collectors.toList());
    }
}`
      },
      project2: {
        title: "Contactless Payment System NFC",
        description: "Development of contactless payment solution using NFC technology, integrating payment gateways and complying with PCI-DSS security standards.",
        demoTitle: "💳 Contactless NFC Payments",
        demoFeatures: [
          "NFC Reading - Card and mobile device processing",
          "Payment Tokenization - Sensitive data protection",
          "Gateway Integration - Payment processor connection",
          "PCI-DSS Compliance - Security standard compliance",
          "Real-Time Transactions - Instant validation and authorization",
          "Reconciliation System - Operation control and audit"
        ],
        demoTech: "Developed with Java 11, Spring Boot, REST APIs, and EMV security protocols to ensure secure transactions.",
        codeExample: `@Service
public class NFCPaymentService {

    private final PaymentGatewayClient gatewayClient;
    private final TokenizationService tokenizationService;
    
    public PaymentResponse processNFCPayment(NFCPaymentRequest request) {
        // Validate NFC card data
        validateNFCData(request.getNfcData());
        
        // Tokenize sensitive information
        String token = tokenizationService.tokenize(request.getCardData());
        
        // Create transaction
        Transaction transaction = Transaction.builder()
            .amount(request.getAmount())
            .currency(request.getCurrency())
            .cardToken(token)
            .merchantId(request.getMerchantId())
            .timestamp(Instant.now())
            .build();
        
        // Process payment through gateway
        PaymentResponse response = gatewayClient.processPayment(transaction);
        
        if (response.isSuccessful()) {
            // Log successful transaction
            transactionRepository.save(transaction);
            notificationService.sendPaymentConfirmation(response);
        }
        
        return response;
    }
    
    private void validateNFCData(String nfcData) {
        if (!nfcData.matches("^[A-F0-9]{32}$")) {
            throw new InvalidNFCDataException("Invalid NFC data");
        }
    }
}

@RestController
@RequestMapping("/api/payments")
public class PaymentController {
    
    @PostMapping("/nfc")
    public ResponseEntity<PaymentResponse> processNFCPayment(
            @Valid @RequestBody NFCPaymentRequest request) {
        PaymentResponse response = paymentService.processNFCPayment(request);
        return ResponseEntity.ok(response);
    }
}`
      },
      project3: {
        title: "Bank CashBack - Virtual Wallet",
        description: "Virtual wallet system with cashback functionality for Banco Hipotecario (MODO). Real-time transaction, balance, and promotion management.",
        demoTitle: "💰 MODO Virtual Wallet",
        demoFeatures: [
          "Balance Management - Real-time account and transaction control",
          "CashBack System - Automatic refund crediting",
          "Promotion Engine - Discount and benefit application",
          "P2P Transfers - User-to-user sending and receiving",
          "Transaction History - Complete operation record",
          "Push Notifications - Real-time transaction alerts"
        ],
        demoTech: "Microservices architecture with Spring Boot, PostgreSQL and Oracle, asynchronous processing with RabbitMQ, and OpenShift deployment.",
        codeExample: `@Service
@Transactional
public class CashbackService {

    private final WalletRepository walletRepository;
    private final TransactionRepository transactionRepository;
    
    public CashbackResponse processCashback(Transaction transaction) {
        // Calculate cashback by category
        BigDecimal cashbackAmount = calculateCashback(
            transaction.getAmount(), 
            transaction.getCategory()
        );
        
        // Get user wallet
        Wallet wallet = walletRepository.findByUserId(transaction.getUserId())
            .orElseThrow(() -> new WalletNotFoundException());
        
        // Credit cashback
        wallet.setBalance(wallet.getBalance().add(cashbackAmount));
        wallet.setPointsBalance(wallet.getPointsBalance() + convertToPoints(cashbackAmount));
        
        // Register cashback transaction
        CashbackTransaction cashback = CashbackTransaction.builder()
            .userId(transaction.getUserId())
            .originalTransactionId(transaction.getId())
            .amount(cashbackAmount)
            .points(convertToPoints(cashbackAmount))
            .status(TransactionStatus.COMPLETED)
            .timestamp(Instant.now())
            .build();
        
        transactionRepository.save(cashback);
        walletRepository.save(wallet);
        
        return CashbackResponse.builder()
            .cashbackAmount(cashbackAmount)
            .newBalance(wallet.getBalance())
            .pointsEarned(convertToPoints(cashbackAmount))
            .build();
    }
    
    private BigDecimal calculateCashback(BigDecimal amount, Category category) {
        return amount.multiply(category.getCashbackPercentage())
                    .setScale(2, RoundingMode.HALF_UP);
    }
}`
      },
      project4: {
        title: "Microservices Architecture",
        description: "Design and implementation of scalable microservices architecture with Spring Cloud, discovery services, API Gateway, and Kubernetes orchestration.",
        demoTitle: "🚀 Cloud-Native Architecture",
        demoFeatures: [
          "API Gateway - Single entry point and intelligent routing",
          "Service Discovery - Automatic registration and discovery with Eureka",
          "Load Balancing - Load distribution across instances",
          "Circuit Breaker - Resilience with Resilience4j",
          "Centralized Configuration - Spring Cloud Config Server",
          "Observability - Monitoring with Micrometer, DataDog and centralized logs"
        ],
        demoTech: "Complete stack with Spring Cloud, Kubernetes for orchestration, Docker for containers, Jenkins for CI/CD, and DataDog monitoring.",
        codeExample: `@Configuration
public class GatewayConfig {
    
    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
            .route("user-service", r -> r
                .path("/api/users/**")
                .filters(f -> f
                    .circuitBreaker(c -> c
                        .setName("userServiceCircuitBreaker")
                        .setFallbackUri("forward:/fallback/users"))
                    .retry(retryConfig -> retryConfig.setRetries(3)))
                .uri("lb://USER-SERVICE"))
            .route("payment-service", r -> r
                .path("/api/payments/**")
                .filters(f -> f
                    .circuitBreaker(c -> c
                        .setName("paymentServiceCircuitBreaker"))
                    .requestRateLimiter(rl -> rl
                        .setRateLimiter(redisRateLimiter())))
                .uri("lb://PAYMENT-SERVICE"))
            .build();
    }
}

@Service
public class ExternalApiService {
    
    @CircuitBreaker(name = "externalApi", fallbackMethod = "fallbackMethod")
    @Retry(name = "externalApi")
    public ResponseEntity<Data> callExternalApi(String id) {
        return restTemplate.getForEntity(
            "http://external-service/api/data/" + id, 
            Data.class
        );
    }
    
    public ResponseEntity<Data> fallbackMethod(String id, Exception e) {
        return ResponseEntity.ok(Data.getDefaultData());
    }
}`
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Interested in working together? Let's talk!",
      email: "Email",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      location: "Location",
      sendWhatsApp: "Send WhatsApp",
      sendEmail: "Send Email",
    },
    footer: {
      madeWith: "Made with",
      by: "by Lucas Kinderknech",
      rights: "All rights reserved",
    },
  },
};
