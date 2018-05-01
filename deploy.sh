set -e
zip -r build.zip build

curl -H "Content-type: application/zip" \
     -H "Authorization: Bearer $NETLIFY_KEY" \
      -d "{\"quiet\": true}" \
     --data-binary "@build.zip" \
     https://api.netlify.com/api/v1/sites/3ff4b4ce-bfe2-4f82-8e4e-878af64d153e