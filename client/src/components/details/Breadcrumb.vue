<template>
<body>
    <ul class="breadcrumbs">

        <li class="breadcrumbs_item">
            
            <router-link class="breadcrumbs_link" to="/">INICIO</router-link>
        </li>
        <li class="breadcrumbs_item">
            <router-link class="breadcrumbs_link" to="/ropa">ROPA</router-link>
        </li>
        <li class="breadcrumbs_item">
            <a href="" class="breadcrumbs_link breadcrumbs_link--active">ARTICULO</a>
        </li>
    </ul>    
</body>    



  
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
     .breadcrumbs {
        margin: 0 11.6% 0 11.6%;
        position: absolute;
        top: 175px;
        padding: 0;
        font-size: 12px;
        font-family: $montserratRegular-font;
         

         }
    .breadcrumbs_item{
        display: inline-block;
        padding: 10px;
        
    }

    .breadcrumbs_item:not(:last-of-type)::after{
        content: '\203a';
        font-size: 22px;
        padding: 10px;
        margin: 0 5px;
        color: #FF8585;
    }

    .breadcrumbs_link {
        text-decoration: none;
        color: #1B1A1A;
    }


    .breadcrumbs_link:hover {
        color:#FF8585
    }

    .breadcrumbs_link--active {
        color:#FF8585;
    }
</style>