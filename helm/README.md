# Timewise Helm Charts

This directory contains Helm charts for deploying Timewise applications to Kubernetes.

## Available Charts

### timewise-website

The main Helm chart for deploying the Timewise website frontend application.

- **Chart Version**: 1.0.0
- **App Version**: 1.0.0
- **Description**: Modern time tracking and compliance management website

## 📖 Documentation

- [Getting Started Guide](GETTING_STARTED.md) - Quick start guide for using the charts
- [Chart README](timewise-website/README.md) - Detailed chart documentation
- [Publishing Guide](timewise-website/PUBLISHING.md) - How to publish to Artifact Hub
- [Changelog](timewise-website/CHANGELOG.md) - Version history and changes

## 🚀 Quick Installation

```bash
# Add the repository (once published)
helm repo add timewise https://hanseatic-tech-company.github.io/timewise-website

# Install the chart
helm install my-timewise timewise/timewise-website
```

Or install directly from source:

```bash
helm install my-timewise ./timewise-website
```

## 📦 Chart Structure

```
helm/
├── README.md                           # This file
├── GETTING_STARTED.md                  # Quick start guide
├── test-chart.sh                       # Testing script
└── timewise-website/                   # Main chart
    ├── Chart.yaml                      # Chart metadata
    ├── values.yaml                     # Default values
    ├── values-production.yaml          # Production config
    ├── values-staging.yaml             # Staging config
    ├── README.md                       # Chart documentation
    ├── CHANGELOG.md                    # Version history
    ├── PUBLISHING.md                   # Publishing guide
    ├── .helmignore                     # Helm ignore patterns
    ├── .artifacthub.yaml              # Artifact Hub metadata
    └── templates/                      # Kubernetes templates
        ├── _helpers.tpl                # Template helpers
        ├── deployment.yaml             # Deployment manifest
        ├── service.yaml                # Service manifest
        ├── serviceaccount.yaml         # ServiceAccount manifest
        ├── ingress.yaml                # Ingress manifest
        ├── configmap.yaml              # ConfigMap manifest
        ├── hpa.yaml                    # HPA manifest
        └── NOTES.txt                   # Post-install notes
```

## 🧪 Testing

Run the test script to validate the chart:

```bash
./test-chart.sh
```

Or manually:

```bash
# Lint the chart
helm lint timewise-website/

# Validate templates
helm template test timewise-website/

# Dry run installation
helm install test timewise-website/ --dry-run --debug
```

## 🔑 Key Features

- **Production Ready**: Includes security contexts, resource limits, and health checks
- **Highly Configurable**: Extensive values for customization
- **Scalable**: Built-in support for horizontal pod autoscaling
- **Secure**: Follows Kubernetes security best practices
- **Well Documented**: Comprehensive documentation and examples
- **CI/CD Ready**: GitHub Actions workflow for automated releases

## 📝 Configuration

Each chart can be configured using values files. See the individual chart's `values.yaml` for all available options.

Common configuration patterns:

```yaml
# Custom image
image:
  repository: my-registry/timewise-website
  tag: "1.2.3"

# Enable ingress
ingress:
  enabled: true
  hosts:
    - host: timewise.example.com

# Resource limits
resources:
  limits:
    cpu: 500m
    memory: 512Mi

# Autoscaling
autoscaling:
  enabled: true
  minReplicas: 3
  maxReplicas: 10
```

## 🌐 Publishing to Artifact Hub

The charts are configured for publishing to [Artifact Hub](https://artifacthub.io/). See [PUBLISHING.md](timewise-website/PUBLISHING.md) for detailed instructions.

### Quick Publish Steps

1. **Package the chart**:
   ```bash
   helm package timewise-website/
   ```

2. **Create GitHub Release**:
   ```bash
   git tag helm-chart-v1.0.0
   git push origin helm-chart-v1.0.0
   ```

3. **Register on Artifact Hub**:
   - Visit https://artifacthub.io
   - Add your Helm repository
   - Charts will be automatically indexed

## 🔄 Versioning

Charts follow [Semantic Versioning](https://semver.org/):

- **MAJOR**: Incompatible API changes
- **MINOR**: Backward-compatible functionality
- **PATCH**: Backward-compatible bug fixes

## 🤝 Contributing

Contributions are welcome! Please:

1. Test your changes with `helm lint` and `helm template`
2. Update the CHANGELOG.md
3. Increment the version in Chart.yaml
4. Update documentation as needed

## 📄 License

These Helm charts are provided under the MIT License.

## 🔗 Links

- **GitHub Repository**: https://github.com/Hanseatic-Tech-Company/timewise-website
- **Artifact Hub**: https://artifacthub.io/packages/helm/timewise-website/timewise-website (once published)
- **Documentation**: See individual chart READMEs

## 💬 Support

For issues, questions, or contributions:
- Open an issue: https://github.com/Hanseatic-Tech-Company/timewise-website/issues
- Tag with `helm-chart` label

---

Made with ❤️ by Hanseatic Tech Company

