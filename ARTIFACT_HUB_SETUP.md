# Artifact Hub Setup Guide for Timewise Helm Chart

## 🎯 Goal
Publish the Timewise Helm chart to Artifact Hub so it can be easily discovered and installed by users.

## ✅ Current Status
- ✅ Helm chart created in `helm/timewise-website/`
- ✅ Files pushed to GitHub: https://github.com/Hanseatic-Tech-Company/timewise-website
- ❌ Chart not yet packaged and published
- ❌ GitHub Pages not enabled
- ❌ Not yet on Artifact Hub

## 📋 Step-by-Step Instructions

### Step 1: Package and Create Helm Repository Locally

Run these commands in your terminal:

```bash
cd /Users/matthiashippe/GIT/timewise-website

# Create directory for GitHub Pages
mkdir -p docs/charts

# Package the Helm chart
helm package helm/timewise-website -d docs/charts/

# Generate the repository index
helm repo index docs/charts --url https://hanseatic-tech-company.github.io/timewise-website/charts

# Verify the files were created
ls -la docs/charts/
```

You should see:
- `timewise-website-1.0.0.tgz` (packaged chart)
- `index.yaml` (repository index)

### Step 2: Commit and Push to GitHub

```bash
# Add all files
git add docs/ helm/ .github/ HELM_CHART_SUMMARY.md setup-helm-repo.sh ARTIFACT_HUB_SETUP.md

# Commit
git commit -m "Add packaged Helm chart and repository index for Artifact Hub"

# Push to main branch
git push origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository settings:
   **https://github.com/Hanseatic-Tech-Company/timewise-website/settings/pages**

2. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/docs`
   - Click **Save**

3. Wait 2-3 minutes for deployment

4. Your Helm repository will be available at:
   **https://hanseatic-tech-company.github.io/timewise-website/charts**

### Step 4: Verify GitHub Pages is Working

Test that the repository is accessible:

```bash
# Test the index.yaml file
curl https://hanseatic-tech-company.github.io/timewise-website/charts/index.yaml

# You should see YAML output with your chart information
```

Or visit in browser:
**https://hanseatic-tech-company.github.io/timewise-website/charts/index.yaml**

### Step 5: Add Helm Repository Locally (Optional Test)

Before adding to Artifact Hub, test it works:

```bash
# Add your repository
helm repo add timewise https://hanseatic-tech-company.github.io/timewise-website/charts

# Update repos
helm repo update

# Search for your chart
helm search repo timewise

# You should see:
# NAME                      CHART VERSION   APP VERSION   DESCRIPTION
# timewise/timewise-website 1.0.0           1.0.0         A Helm chart for Timewise...
```

### Step 6: Add to Artifact Hub

1. Go to **https://artifacthub.io**

2. Click **Sign in** (use your GitHub account)

3. Click your profile → **Control Panel**

4. Click **Add Repository**

5. Fill in the form:
   - **Kind**: `Helm charts`
   - **Name**: `timewise-website`
   - **Display name**: `Timewise Website`
   - **URL**: `https://hanseatic-tech-company.github.io/timewise-website/charts`
   - **Repository URL** (optional): `https://github.com/Hanseatic-Tech-Company/timewise-website`
   - **Official**: ✅ (if it's your official chart)

6. Click **Add**

7. Wait a few minutes for Artifact Hub to scan and index your repository

### Step 7: Verify on Artifact Hub

Your chart should appear at:
**https://artifacthub.io/packages/helm/timewise-website/timewise-website**

## 🔄 Updating the Chart

When you make changes to the chart:

1. Update version in `helm/timewise-website/Chart.yaml`:
   ```yaml
   version: 1.1.0
   ```

2. Update `CHANGELOG.md` with changes

3. Re-package and update index:
   ```bash
   # Package new version
   helm package helm/timewise-website -d docs/charts/
   
   # Update index
   helm repo index docs/charts --url https://hanseatic-tech-company.github.io/timewise-website/charts --merge docs/charts/index.yaml
   
   # Commit and push
   git add docs/charts/ helm/timewise-website/
   git commit -m "Release chart version 1.1.0"
   git push
   ```

4. Artifact Hub will automatically detect the update within a few hours

## 🤖 Alternative: Automated Releases with GitHub Actions

The repository includes a GitHub Actions workflow (`.github/workflows/release-helm-chart.yml`) that can automate this process.

To use it:

1. Update chart version in `Chart.yaml`
2. Commit your changes
3. Create and push a tag:
   ```bash
   git tag helm-chart-v1.0.0
   git push origin helm-chart-v1.0.0
   ```
4. The workflow will automatically package and release the chart

## 🐛 Troubleshooting

### Error: "invalid input: the url provided does not point to a valid Helm repository"

**Cause**: GitHub Pages is not enabled, or the `index.yaml` file doesn't exist at the URL.

**Solution**:
1. Verify GitHub Pages is enabled in repository settings
2. Wait 2-3 minutes after enabling
3. Test the URL manually: `curl https://hanseatic-tech-company.github.io/timewise-website/charts/index.yaml`
4. If you get a 404, GitHub Pages isn't deployed yet

### Error: 404 when accessing charts URL

**Cause**: GitHub Pages takes a few minutes to deploy.

**Solution**: Wait 2-3 minutes and try again.

### Error: Chart appears but wrong version

**Cause**: Cached index.yaml

**Solution**: 
```bash
helm repo update
```

## 📝 Quick Reference

| Item | Value |
|------|-------|
| **GitHub Repository** | https://github.com/Hanseatic-Tech-Company/timewise-website |
| **Helm Repository URL** | https://hanseatic-tech-company.github.io/timewise-website/charts |
| **Index File** | https://hanseatic-tech-company.github.io/timewise-website/charts/index.yaml |
| **Artifact Hub** | https://artifacthub.io/packages/helm/timewise-website/timewise-website |

## ✅ Checklist

- [ ] Run `helm package` command
- [ ] Run `helm repo index` command
- [ ] Verify `docs/charts/timewise-website-1.0.0.tgz` exists
- [ ] Verify `docs/charts/index.yaml` exists
- [ ] Commit and push to GitHub
- [ ] Enable GitHub Pages in repository settings
- [ ] Wait 2-3 minutes for deployment
- [ ] Test URL with curl or browser
- [ ] Add repository to Artifact Hub
- [ ] Wait for Artifact Hub to index
- [ ] Verify chart appears on Artifact Hub

## 🎉 Success!

Once complete, users can install your chart with:

```bash
helm repo add timewise https://hanseatic-tech-company.github.io/timewise-website/charts
helm repo update
helm install my-timewise timewise/timewise-website
```

## 📞 Support

For issues:
- GitHub Issues: https://github.com/Hanseatic-Tech-Company/timewise-website/issues
- Artifact Hub Docs: https://artifacthub.io/docs/

