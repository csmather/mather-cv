#!/usr/bin/env bash
# Local preview for mather.cv — http://localhost:4000
set -e
cd "$(dirname "$0")"
export PATH="/home/linuxbrew/.linuxbrew/opt/ruby@3.3/bin:/home/linuxbrew/.linuxbrew/lib/ruby/gems/3.3.0/bin:$PATH"
bundle exec jekyll serve
