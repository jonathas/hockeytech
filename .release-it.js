module.exports = {
    hooks: {
      "after:bump": ["npx auto-changelog -p"]
    },
    git: {
      commit: true,
      commitMessage: "chore(release): ${version}",
      commitArgs: "",
      tag: true,
      tagName: "${version}",
      tagAnnotation: "${version}",
      push: true,
      requireCommits: true,
      changelog:
        "npx auto-changelog --stdout --commit-limit false -u --template ./changelog.hbs"
    },
    github: {
      release: false,
      releaseName: "${version}",
      // assets: ['dist/*.zip'],
      assets: ["dist/*.zip"]
    },
    npm: {
      publish: true
    }
  };