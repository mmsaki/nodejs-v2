# reddit cli

This cli opens a random redit post in your browser

## How to use cli

This install your cli in you global

```zsh
npm install msaki-reddit-cli
```

## Run cli

```zsh
reddit
```

Or use print flag to print reddit post link

```zsh
# using --print
reddit --print

# 0r
reddit -P
```

Expected stdout:

```zsh
reddit-cli git:(main) ✗ reddit -p

    title: LPT Request: How do I stop scrolling my phone? Literally nothing I’ve tried works
    link: https://reddit.com//r/LifeProTips/comments/13wmoc3/lpt_request_how_do_i_stop_scrolling_my_phone/
```

## Publish cli

Log in to your npm account

```zsh
npm login
```

Publish package

```zsh
npm publish
```

## Development: install locally by cloning repo

To install cli in your global npm packages

```zsh
# go to root directory
cd reddit-cli/

# then

npm install -g
```
