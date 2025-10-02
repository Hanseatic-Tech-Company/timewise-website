# Publishing Timewise Helm Chart to Artifact Hub

This guide explains how to publish the Timewise Helm chart to Artifact Hub.

## Prerequisites

1. A GitHub account with access to the repository
2. A Helm chart repository (can use GitHub Pages)
3. An Artifact Hub account (https://artifacthub.io)

## Step 1: Package the Helm Chart

First, package your Helm chart:

```bash
cd /Users/matthiashippe/GIT/timewise-website
helm package helm/timewise-website
```

This creates a file like `timewise-website-1.0.0.tgz`.

## Step 2: Create a Helm Repository

### Option A: Using GitHub Pages

1. Create a `gh-pages` branch or use a `docs` folder in main branch:

```bash
git checkout -b gh-pages
# or use docs/ folder in main
mkdir -p docs/charts
```

2. Move the packaged chart to the repository directory:

```bash
mv timewise-website-1.0.0.tgz docs/charts/
```

3. Generate/update the index file:

```bash
helm repo index docs/charts --url https://hanseatic-tech-company.github.io/timewise-website/charts
```

4. Commit and push:

```bash
git add docs/charts
git commit -m "Add Helm chart package and index"
git push origin gh-pages
# or
git push origin main
```

5. Enable GitHub Pages in repository settings pointing to the `docs` folder or `gh-pages` branch.

### Option B: Using GitHub Releases

1. Create a GitHub Release with the packaged chart as an asset
2. Use Chart Releaser Action (see GitHub Actions section below)

## Step 3: Register with Artifact Hub

1. Go to https://artifacthub.io
2. Sign in with your GitHub account
3. Go to Control Panel → Add Repository
4. Fill in the details:
   - **Kind**: Helm charts
   - **Name**: timewise-website
   - **Display Name**: Timewise Website
   - **URL**: https://hanseatic-tech-company.github.io/timewise-website/charts
   - **Repository URL** (optional): https://github.com/Hanseatic-Tech-Company/timewise-website

5. Click "Add"

Artifact Hub will automatically scan your Helm repository and list your charts.

## Step 4: Update Chart Metadata for Better Artifact Hub Integration

The chart already includes Artifact Hub annotations in `Chart.yaml`:

```yaml
annotations:
  artifacthub.io/category: integration-delivery
  artifacthub.io/license: MIT
  artifacthub.io/links: |
    - name: GitHub Repository
      url: https://github.com/Hanseatic-Tech-Company/timewise-website
  artifacthub.io/changes: |
    - kind: added
      description: Initial release of Timewise website Helm chart
```

## Step 5: Verify Your Chart on Artifact Hub

After registration, your chart should appear at:
https://artifacthub.io/packages/helm/timewise-website/timewise-website

## Automated Publishing with GitHub Actions

For automated chart releasing, see the `.github/workflows/release-helm-chart.yml` workflow that:

1. Automatically packages and releases charts when you push version tags
2. Updates the Helm repository index
3. Creates GitHub releases with chart artifacts

### Using the Automated Workflow

1. Update the chart version in `helm/timewise-website/Chart.yaml`
2. Commit your changes:
   ```bash
   git add helm/timewise-website/Chart.yaml
   git commit -m "Bump chart version to x.y.z"
   ```
3. Tag the release:
   ```bash
   git tag helm-chart-vx.y.z
   git push origin helm-chart-vx.y.z
   ```
4. The GitHub Action will automatically:
   - Package the chart
   - Create a GitHub release
   - Update the Helm repository index
   - Artifact Hub will detect the new version

## Updating Your Chart

When you make changes to your chart:

1. Increment the version in `Chart.yaml`
2. Update the `changes` annotation in `Chart.yaml`:
   ```yaml
   artifacthub.io/changes: |
     - kind: changed
       description: Update resource limits
     - kind: fixed
       description: Fix ingress configuration
   ```
3. Package and publish following the same steps above

## Change Kind Values

When documenting changes, use these standardized values:

- `added`: New features
- `changed`: Changes to existing functionality
- `deprecated`: Features that will be removed
- `removed`: Removed features
- `fixed`: Bug fixes
- `security`: Security improvements

## Best Practices

1. **Semantic Versioning**: Use semantic versioning (MAJOR.MINOR.PATCH)
2. **README**: Keep the chart README comprehensive and up-to-date
3. **Values Documentation**: Document all values in `values.yaml` with comments
4. **CHANGELOG**: Maintain a changelog for transparency
5. **Testing**: Test your chart thoroughly before publishing
6. **Icon**: Consider adding a chart icon for better visibility on Artifact Hub

## Testing Your Chart Locally

Before publishing, test your chart:

```bash
# Lint the chart
helm lint helm/timewise-website

# Template the chart to see generated manifests
helm template timewise helm/timewise-website

# Install in a test namespace
helm install timewise-test helm/timewise-website -n test --create-namespace --dry-run

# Actually install it
helm install timewise-test helm/timewise-website -n test --create-namespace
```

## Adding a Chart Icon

To add an icon (optional but recommended):

1. Add an icon URL to `Chart.yaml`:
   ```yaml
   icon: https://raw.githubusercontent.com/Hanseatic-Tech-Company/timewise-website/main/public/lovable-uploads/timewise-logo.png
   ```

2. The icon should be:
   - Square (1:1 aspect ratio)
   - At least 256x256 pixels
   - PNG or SVG format

## Support and Issues

For issues with the chart:
- Open an issue on GitHub: https://github.com/Hanseatic-Tech-Company/timewise-website/issues
- Tag issues with `helm-chart` label

## Resources

- [Helm Documentation](https://helm.sh/docs/)
- [Artifact Hub Documentation](https://artifacthub.io/docs/)
- [Chart Best Practices](https://helm.sh/docs/chart_best_practices/)
- [Artifact Hub Annotations](https://artifacthub.io/docs/topics/annotations/helm/)

