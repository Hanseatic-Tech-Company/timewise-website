#!/bin/bash
# Setup script to publish Helm chart for Artifact Hub

set -e

echo "🚀 Setting up Helm repository for Artifact Hub"
echo ""

# Check if helm is installed
if ! command -v helm &> /dev/null; then
    echo "❌ Helm is not installed. Please install Helm first:"
    echo "   brew install helm"
    exit 1
fi

echo "✅ Helm is installed"
echo ""

# Create docs/charts directory for GitHub Pages
echo "📁 Creating docs/charts directory..."
mkdir -p docs/charts

# Package the Helm chart
echo "📦 Packaging Helm chart..."
helm package helm/timewise-website -d docs/charts/

# Generate the index.yaml
echo "📋 Generating Helm repository index..."
helm repo index docs/charts --url https://hanseatic-tech-company.github.io/timewise-website/charts

echo ""
echo "✅ Helm repository created successfully!"
echo ""
echo "📝 Next steps:"
echo ""
echo "1. Add and commit the files:"
echo "   git add helm/ .github/ docs/ HELM_CHART_SUMMARY.md"
echo "   git commit -m 'Add Helm chart for Kubernetes deployment'"
echo "   git push"
echo ""
echo "2. Enable GitHub Pages:"
echo "   - Go to: https://github.com/Hanseatic-Tech-Company/timewise-website/settings/pages"
echo "   - Source: Deploy from a branch"
echo "   - Branch: main"
echo "   - Folder: /docs"
echo "   - Click Save"
echo ""
echo "3. Wait a few minutes for GitHub Pages to deploy"
echo ""
echo "4. Add to Artifact Hub:"
echo "   - URL: https://hanseatic-tech-company.github.io/timewise-website/charts"
echo "   - Kind: Helm charts"
echo ""
echo "5. Test the repository URL first:"
echo "   curl https://hanseatic-tech-company.github.io/timewise-website/charts/index.yaml"
echo ""
echo "Repository structure created in docs/charts/"
ls -lh docs/charts/

