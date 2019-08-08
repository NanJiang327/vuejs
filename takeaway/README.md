# Takeaway App

> This is project is based on Vue 2.5
>
> In this single web app
>
> 1. Add and remove product(s) into/from cartyou can also view the detail and comments of products.
> 2. See the seller detail
> 3. See the food detail, rating and comments. You can also filtering comments
> 4. See the what you had add to cart
>
> [Demo](https://nanjiang327.github.io/vuejs/takeaway/#/goods?_blank) (Better experience on mobile device)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# Express server run at localhost:3000

```

## Tech Stack
- Vue-cli
- Vue
- Axios
- Vue-router
- Better-scroll
- Stylus
- Webpack
- ES6

## Structure
```
.
├── build // webpack config file
├── config // package path
├── index.html // entry html page
├── jsondata // mock data
├── package.json //
├── resource
├── routes // nodejs router config files
└── src
	├── App.vue // entry vue file
	├── assets
	│   ├── js
	│   └── styles
	├── components // components
	│   ├── cart
	│   ├── common // common components
	│   ├── goods
	│   ├── header
	│   ├── rating
	│   └── seller
	├── main.js // componets loading file
	└── router
	    └── index.js //vue route config file
```
## Demo
![img](https://github.com/NanJiang327/vuejs/blob/master/takeaway/demo/demo%231.gif)

## Features
- [x] Add product(s) to cart and count the total price
- [x] Animation for adding product
- [x] Remove product(s) from cart
- [x] View seller details
- [x] View product detail
- [x] View and filtering user comments
- [x] Cart review
- [ ] Check out

