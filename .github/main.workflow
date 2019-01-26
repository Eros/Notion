workflow "New workflow" {
  on = "push"
  resolves = ["GitHub Action for AWS"]
}

action "GitHub Action for AWS" {
  uses = "actions/aws/cli@8d318706868c00929f57a0b618504dcdda52b0c9"
  secrets = ["GITHUB_TOKEN"]
}
