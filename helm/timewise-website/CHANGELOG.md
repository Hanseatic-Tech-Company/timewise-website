# Changelog

All notable changes to the Timewise Website Helm chart will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-10-02

### Added
- Initial release of Timewise website Helm chart
- Deployment with configurable replicas
- Service configuration (ClusterIP, NodePort, LoadBalancer)
- Ingress support with TLS configuration
- Horizontal Pod Autoscaler (HPA) support
- ConfigMap for environment variables
- ServiceAccount with RBAC
- Security contexts and pod security policies
- Liveness and readiness probes
- Resource limits and requests
- Support for custom annotations and labels
- Production and staging value files
- Comprehensive README documentation
- GitHub Actions workflow for automated releases
- Artifact Hub integration with proper metadata

### Features
- **High Availability**: Configurable replica count with anti-affinity rules
- **Scalability**: Optional HPA based on CPU and memory metrics
- **Security**: Non-root user, dropped capabilities, read-only root filesystem option
- **Flexibility**: Extensive configuration options via values.yaml
- **Production Ready**: Includes production and staging configuration examples

### Configuration Options
- Image repository, tag, and pull policy
- Service type and port configuration
- Ingress with TLS and custom annotations
- Resource limits and requests
- Autoscaling parameters
- Pod and container security contexts
- Custom environment variables
- Volume mounts and volumes
- Node selectors, tolerations, and affinity rules

[1.0.0]: https://github.com/Hanseatic-Tech-Company/timewise-website/releases/tag/helm-chart-v1.0.0

