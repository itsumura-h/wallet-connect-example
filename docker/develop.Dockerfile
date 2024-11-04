FROM node:20-bookworm-slim

RUN apt update
RUN apt upgrade -y
RUN apt install -y \
  curl \
  wget \
  git
# pnpm
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -
# foundry
RUN curl -L https://foundry.paradigm.xyz | bash
ENV PATH=/root/.foundry/bin/:$PATH
RUN foundryup
