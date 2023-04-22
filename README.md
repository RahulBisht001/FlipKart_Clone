# FlipKart Clone
__________________________

![logo](https://github.com/RahulBisht001/FlipKart_Clone/blob/main/Filpkart%20Img.jpg)


## 🎯 Learnings from the Projects:

 ### 📌 About Material UI
 __________________________
* You can directly style the components of material UI with this syntax:
```javascript
const CustomBox = styled(Box)`
margin-left:12%;
line-height:0;
`
```

* we can use this Syntax for Custom css of HTMl tag in React and material UI


```javascript

const PlusImg = styled('img')({
    width: 12,
    height: 12,
    marginLeft: 4
})
```



## Libraries Used in the Project
___________________________________

### react-multi-carousel
* installation Link :
``` npm i react-multi-carousel ```

* Resource Link :
https://www.npmjs.com/package/react-multi-carousel 





## Error Occured in the Project

### DataBase Errors
* `user is not allowed to do action [insert] on [test.products]`
This is an Classical Error while setting the connection with the DataBase.

Solution__
Resource Link : https://tinyl.io/8E3U
Go to DataBase and check the User Roles 
Replace it with ReadAndWrite option.