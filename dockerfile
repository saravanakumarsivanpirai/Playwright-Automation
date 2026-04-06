FROM jenkins/jenkins:lts

USER root

# Install Node.js
RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Install Playwright dependencies
RUN npx playwright install --with-deps || true

USER jenkins