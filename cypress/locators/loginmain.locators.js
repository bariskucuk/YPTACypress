var LogInMainLocator = {

    userinfo: function() {
           return '#user-info'
    },

    logout_button: function() {
           return '.btnUserLogout'
    },

    regionfield_button:function(){
           return '.select2-selection__placeholder'
    },

    regionfield_input:function(){
           return '[class="select2-search__field"]'
    },

    restaurantsearch_input:function(){
           return '[class="form-control search-box"]'
    },
    
    restaurantname:function(){
           return '.restaurantName'
    },

    usersettings:function(){
           return ".ys-userSettings"
    }
};

export default LogInMainLocator;