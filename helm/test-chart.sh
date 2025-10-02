#!/bin/bash
# Script to test the Timewise Helm chart

set -e

CHART_PATH="helm/timewise-website"
CHART_NAME="timewise-website"
TEST_NAMESPACE="timewise-test"

echo "🔍 Linting Helm chart..."
helm lint $CHART_PATH

echo ""
echo "📝 Validating chart templates..."
helm template $CHART_NAME $CHART_PATH > /dev/null
echo "✅ Chart templates are valid"

echo ""
echo "🧪 Rendering templates with default values..."
helm template $CHART_NAME $CHART_PATH --debug

echo ""
echo "🔒 Testing with production values..."
helm template $CHART_NAME $CHART_PATH -f $CHART_PATH/values-production.yaml > /dev/null
echo "✅ Production values are valid"

echo ""
echo "🔧 Testing with staging values..."
helm template $CHART_NAME $CHART_PATH -f $CHART_PATH/values-staging.yaml > /dev/null
echo "✅ Staging values are valid"

echo ""
echo "📦 Testing chart packaging..."
helm package $CHART_PATH -d /tmp
echo "✅ Chart packaged successfully"

echo ""
echo "🎉 All tests passed!"
echo ""
echo "To install the chart locally for testing:"
echo "  helm install $CHART_NAME $CHART_PATH -n $TEST_NAMESPACE --create-namespace --dry-run"
echo ""
echo "To actually deploy:"
echo "  helm install $CHART_NAME $CHART_PATH -n $TEST_NAMESPACE --create-namespace"
echo ""
echo "To uninstall:"
echo "  helm uninstall $CHART_NAME -n $TEST_NAMESPACE"

