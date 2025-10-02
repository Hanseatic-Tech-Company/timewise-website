# Timewise Website Helm Chart

A Helm chart for deploying the Timewise website - a modern time tracking and compliance management solution.

## Introduction

This chart bootstraps a Timewise website deployment on a [Kubernetes](https://kubernetes.io) cluster using the [Helm](https://helm.sh) package manager.

## Prerequisites

- Kubernetes 1.19+
- Helm 3.0+
- A Docker image registry (Docker Hub, ECR, GCR, etc.)

## Installing the Chart

To install the chart with the release name `timewise`:

```bash
helm install timewise ./helm/timewise-website
```

Or from a Helm repository:

```bash
helm repo add timewise https://hanseatic-tech-company.github.io/timewise-website
helm install timewise timewise/timewise-website
```

The command deploys Timewise on the Kubernetes cluster with default configuration. The [Parameters](#parameters) section lists the parameters that can be configured during installation.

## Uninstalling the Chart

To uninstall/delete the `timewise` deployment:

```bash
helm uninstall timewise
```

## Parameters

### Global Parameters

| Name                      | Description                                     | Value                        |
| ------------------------- | ----------------------------------------------- | ---------------------------- |
| `replicaCount`           | Number of replicas to deploy                    | `2`                          |
| `image.repository`       | Docker image repository                         | `timewise/timewise-website`  |
| `image.pullPolicy`       | Image pull policy                               | `IfNotPresent`               |
| `image.tag`              | Image tag (defaults to chart appVersion)        | `""`                         |

### Service Parameters

| Name                  | Description                    | Value        |
| --------------------- | ------------------------------ | ------------ |
| `service.type`        | Kubernetes service type        | `ClusterIP`  |
| `service.port`        | Service port                   | `80`         |
| `service.targetPort`  | Container port                 | `4173`       |
| `service.annotations` | Service annotations            | `{}`         |

### Ingress Parameters

| Name                       | Description                              | Value                    |
| -------------------------- | ---------------------------------------- | ------------------------ |
| `ingress.enabled`         | Enable ingress                           | `false`                  |
| `ingress.className`       | Ingress class name                       | `""`                     |
| `ingress.annotations`     | Ingress annotations                      | `{}`                     |
| `ingress.hosts`           | Ingress hosts configuration              | See `values.yaml`        |
| `ingress.tls`             | Ingress TLS configuration                | `[]`                     |

### Resource Parameters

| Name                        | Description                          | Value      |
| --------------------------- | ------------------------------------ | ---------- |
| `resources.limits.cpu`      | CPU limit                            | `200m`     |
| `resources.limits.memory`   | Memory limit                         | `256Mi`    |
| `resources.requests.cpu`    | CPU request                          | `100m`     |
| `resources.requests.memory` | Memory request                       | `128Mi`    |

### Autoscaling Parameters

| Name                                           | Description                              | Value   |
| ---------------------------------------------- | ---------------------------------------- | ------- |
| `autoscaling.enabled`                         | Enable autoscaling                       | `false` |
| `autoscaling.minReplicas`                     | Minimum number of replicas               | `2`     |
| `autoscaling.maxReplicas`                     | Maximum number of replicas               | `10`    |
| `autoscaling.targetCPUUtilizationPercentage`  | Target CPU utilization percentage        | `80`    |
| `autoscaling.targetMemoryUtilizationPercentage` | Target memory utilization percentage   | `80`    |

### Security Parameters

| Name                                    | Description                              | Value   |
| --------------------------------------- | ---------------------------------------- | ------- |
| `serviceAccount.create`                | Create service account                   | `true`  |
| `serviceAccount.annotations`           | Service account annotations              | `{}`    |
| `podSecurityContext.fsGroup`           | File system group                        | `2000`  |
| `podSecurityContext.runAsNonRoot`      | Run as non-root user                     | `true`  |
| `podSecurityContext.runAsUser`         | User ID                                  | `1000`  |

## Configuration and Installation Details

### Ingress Configuration

To enable ingress, set `ingress.enabled=true` and configure the appropriate annotations for your ingress controller:

```yaml
ingress:
  enabled: true
  className: "nginx"
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-prod
  hosts:
    - host: timewise.example.com
      paths:
        - path: /
          pathType: Prefix
  tls:
    - secretName: timewise-tls
      hosts:
        - timewise.example.com
```

### Autoscaling

To enable horizontal pod autoscaling:

```yaml
autoscaling:
  enabled: true
  minReplicas: 2
  maxReplicas: 10
  targetCPUUtilizationPercentage: 80
```

### Environment Variables

You can add custom environment variables using:

```yaml
env:
  - name: NODE_ENV
    value: "production"
```

Or use a ConfigMap:

```yaml
envConfigMap:
  NODE_ENV: "production"
```

## Examples

### Install with custom values

```bash
helm install timewise ./helm/timewise-website \
  --set image.tag=1.0.0 \
  --set ingress.enabled=true \
  --set ingress.hosts[0].host=timewise.example.com
```

### Install with custom values file

```bash
helm install timewise ./helm/timewise-website -f custom-values.yaml
```

Example `custom-values.yaml`:

```yaml
replicaCount: 3

image:
  repository: myregistry.io/timewise-website
  tag: "1.2.0"

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

## Upgrading

To upgrade the deployment:

```bash
helm upgrade timewise ./helm/timewise-website
```

## Support

For issues and questions, please visit:
- GitHub: https://github.com/Hanseatic-Tech-Company/timewise-website

## License

This Helm chart is provided under the MIT License.

