<template>
<div>

   <h3>Some User Details</h3>
   <hr>
   
   <router-link tag="button" :to="{ name:'userEdit',params:{id:$route.params.id},query:{q:100,locale:'en'}}" class="btn btn-primary">Edit User</router-link tag="button" :to="'/user/'+$route.params.id+'/edit'">

</div>
    
</template>