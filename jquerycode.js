<script>
    FastClick.attach(document.body);
    $('#fullpage').fullpage();

    $(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.nav-wrapper').addClass("sticky");
        }else{
            $('.nav-wrapper').removeClass("sticky");
        }
    })
    })

    
        
</script>