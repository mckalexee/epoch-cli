# Epoch CLI
This is a command line tool to show the current epoch time, pretty print epoch time, or parse a date string to epoch time.

## Installation

`$ npm i -g epoch-cli`

## Usage

Print the current epoch time:
```
$ epoch
1536852063
```
Pretty print the date from epoch time:
```
$ epoch 1536852063
2018-9-13 10:21:03
```
Print the epoch time from a date string:
```
$ epoch "2018/9/13 10:35:19"
1536852919
```