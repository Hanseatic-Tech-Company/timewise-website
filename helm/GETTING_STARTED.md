# Getting Started with Timewise Helm Chart

This guide will help you get started with the Timewise website Helm chart for Kubernetes deployment.

## 📋 Prerequisites

Before you begin, ensure you have:

- **Kubernetes cluster** (v1.19 or later)
- **Helm** (v3.0 or later) - [Install Helm](https://helm.sh/docs/intro/install/)
- **kubectl** configured to access your cluster
- **Docker image** of the Timewise website pushed to a registry

## 🚀 Quick Start

### 1. Build and Push Docker Image

First, build and push your Docker image:

```bash
cd /Users/matthiashippe/GIT/timewise-website

# Build the image
docker build -t your-registry/timewise-website:1.0.0 .

# Push to your registry
docker push your-registry/timewise-website:1.0.0
```

### 2. Install the Helm Chart

Install with default values:

```bash
helm install timewise ./helm/timewise-website \
  --set image.repository=your-registry/timewise-website \
  --set image.tag=1.0.0
```

### 3. Verify Installation

Check the deployment status:

```bash
# Check pods
kubectl get pods -l app.kubernetes.io/name=timewise-website

# Check service
kubectl get svc -l app.kubernetes.io/name=timewise-website

# Get installation notes
helm status timewise
```

### 4. Access the Application

#### Port Forward (for testing)

```bash
kubectl port-forward svc/timewise-timewise-website 8080:80
```

Then visit http://localhost:8080

#### With Ingress (for production)

Update values to enable ingress:

```bash
helm upgrade timewise ./helm/timewise-website \
  --set image.repository=your-registry/timewise-website \
  --set image.tag=1.0.0 \
  --set ingress.enabled=true \
  --set ingress.hosts[0].host=timewise.example.com \
  --set ingress.hosts[0].paths[0].path=/ \
  --set ingress.hosts[0].paths[0].pathType=Prefix
```

## 📦 Installation Options

### Using Custom Values File

Create a custom `my-values.yaml`:

```yaml
image:
  repository: your-registry/timewise-website
  tag: "1.0.0"

replicaCount: 3

ingress:
  enabled: true
  className: "nginx"
  hosts:
    - host: timewise.example.com
      paths:
        - path: /
          pathType: Prefix

resources:
  limits:
    cpu: 500m
    memory: 512Mi
  requests:
    cpu: 200m
    memory: 256Mi
```

Install with custom values:

```bash
helm install timewise ./helm/timewise-website -f my-values.yaml
```

### Using Pre-configured Environment Files

**Production:**
```bash
helm install timewise ./helm/timewise-website \
  -f helm/timewise-website/values-production.yaml \
  --set image.repository=your-registry/timewise-website
```

**Staging:**
```bash
helm install timewise ./helm/timewise-website \
  -f helm/timewise-website/values-staging.yaml \
  --set image.repository=your-registry/timewise-website
```

## 🔧 Configuration Examples

### Enable Autoscaling

```bash
helm upgrade timewise ./helm/timewise-website \
  --set autoscaling.enabled=true \
  --set autoscaling.minReplicas=3 \
  --set autoscaling.maxReplicas=10
```

### Configure TLS/SSL

```bash
helm upgrade timewise ./helm/timewise-website \
  --set ingress.enabled=true \
  --set ingress.tls[0].secretName=timewise-tls \
  --set ingress.tls[0].hosts[0]=timewise.example.com
```

### Set Environment Variables

```bash
helm upgrade timewise ./helm/timewise-website \
  --set envConfigMap.NODE_ENV=production \
  --set envConfigMap.API_URL=https://api.example.com
```

## 🧪 Testing Before Deployment

### Dry Run

Test the installation without actually deploying:

```bash
helm install timewise ./helm/timewise-website \
  --dry-run --debug \
  --set image.repository=your-registry/timewise-website
```

### Template Validation

View the generated Kubernetes manifests:

```bash
helm template timewise ./helm/timewise-website \
  --set image.repository=your-registry/timewise-website > manifests.yaml
```

### Run Test Script

```bash
./helm/test-chart.sh
```

## 📊 Monitoring and Maintenance

### Check Deployment Status

```bash
# List all releases
helm list

# Get release information
helm status timewise

# Get release values
helm get values timewise

# View release history
helm history timewise
```

### View Logs

```bash
# Get logs from all pods
kubectl logs -l app.kubernetes.io/name=timewise-website --tail=100

# Follow logs
kubectl logs -l app.kubernetes.io/name=timewise-website -f
```

### Health Checks

```bash
# Check pod health
kubectl get pods -l app.kubernetes.io/name=timewise-website

# Describe pod for details
kubectl describe pod -l app.kubernetes.io/name=timewise-website

# Check events
kubectl get events --sort-by=.metadata.creationTimestamp
```

## 🔄 Upgrading

### Upgrade to New Version

```bash
# Update chart values
helm upgrade timewise ./helm/timewise-website \
  --set image.tag=1.1.0

# Or upgrade with new values file
helm upgrade timewise ./helm/timewise-website -f new-values.yaml
```

### Rollback

If something goes wrong:

```bash
# Rollback to previous version
helm rollback timewise

# Rollback to specific revision
helm rollback timewise 2
```

## 🗑️ Uninstalling

Remove the Helm release:

```bash
# Uninstall release
helm uninstall timewise

# If deployed in a specific namespace
helm uninstall timewise -n your-namespace
```

## 🐛 Troubleshooting

### Pods Not Starting

```bash
# Check pod status
kubectl describe pod -l app.kubernetes.io/name=timewise-website

# Check events
kubectl get events --field-selector involvedObject.name=<pod-name>

# Check logs
kubectl logs <pod-name>
```

### Image Pull Errors

If you see ImagePullBackOff:

```bash
# Check image pull secrets
kubectl get secrets

# Create image pull secret if needed
kubectl create secret docker-registry regcred \
  --docker-server=your-registry \
  --docker-username=your-username \
  --docker-password=your-password \
  --docker-email=your-email

# Update values to use the secret
helm upgrade timewise ./helm/timewise-website \
  --set imagePullSecrets[0].name=regcred
```

### Service Not Accessible

```bash
# Check service
kubectl get svc timewise-timewise-website

# Check endpoints
kubectl get endpoints timewise-timewise-website

# Check ingress
kubectl get ingress
kubectl describe ingress timewise-timewise-website
```

## 📝 Common Values to Customize

| Value | Description | Default |
|-------|-------------|---------|
| `image.repository` | Docker image repository | `timewise/timewise-website` |
| `image.tag` | Image tag | `""` (uses appVersion) |
| `replicaCount` | Number of replicas | `2` |
| `service.type` | Service type (ClusterIP/NodePort/LoadBalancer) | `ClusterIP` |
| `service.port` | Service port | `80` |
| `ingress.enabled` | Enable ingress | `false` |
| `resources.limits.cpu` | CPU limit | `200m` |
| `resources.limits.memory` | Memory limit | `256Mi` |
| `autoscaling.enabled` | Enable HPA | `false` |

## 🔐 Security Considerations

The chart includes security best practices:

- ✅ Runs as non-root user
- ✅ Drops all capabilities
- ✅ Uses security contexts
- ✅ Configurable pod security policies
- ✅ Network policies ready
- ✅ Service account with RBAC

## 📚 Additional Resources

- [Full Chart Documentation](README.md)
- [Publishing Guide](PUBLISHING.md)
- [Changelog](CHANGELOG.md)
- [Helm Documentation](https://helm.sh/docs/)
- [Kubernetes Documentation](https://kubernetes.io/docs/)

## 💬 Support

For issues or questions:
- GitHub Issues: https://github.com/Hanseatic-Tech-Company/timewise-website/issues
- Chart Repository: https://github.com/Hanseatic-Tech-Company/timewise-website

## 📄 License

This Helm chart is provided under the MIT License.

