npm version $1 || exit 1
git push --follow-tags || exit 1
npm run build
npm version patch --no-git-tag-version
git add .
git commit -m "next development version"