let Home = 'home.html'
let Search = ''
let News = ''
let Login = 'Login_page.html'
let Logout = ''
let isLogin = false // true if already login
let Product = 'product.html'
let Favorite = ''
let Team = ''
let Account = ''
///incomplete
let nav = `



<style name = 'forNav'>

    /* The Overlay (background) */
    .overlay {
        /* Height & width depends on how you want to reveal the overlay (see JS below) */

        height: 100%;
        width: 0;
        position: fixed;

        right: 0;
        top: 0;
        background-color: rgb(78, 107, 129);
        /* Black fallback color */
        background-color: rgba(40, 93, 116, 0.9);
        /* Black w/opacity */
        overflow-x: hidden;
        /* Disable horizontal scroll */
        transition: 0.5s;
        /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
    }

    /* Position the content inside the overlay */
    .overlay-content {
        position: relative;
        top: 25%;
        /* 25% from the top */
        width: 100%;
        /* 100% width */
        text-align: center;
        /* Centered text/links */
        margin-top: 30px;
        /* 30px top margin to avoid conflict with the close button on smaller screens */
    }

    /* The navigation links inside the overlay */
    .overlay a {
        padding: 8px;
        text-decoration: none;
        font-size: 36px;
        color: #ffffff;
        display: block;
        /* Display block instead of inline */
        transition: 0.3s;
        /* Transition effects on hover (color) */
    }

    /* When you mouse over the navigation links, change their color */
    .overlay a:hover,
    .overlay a:focus {
        color: #39ffc0;
    }

    /* Position the close button (top right corner) */
    .overlay .closebtn {
        position: absolute;
        top: 20px;
        right: 45px;
        font-size: 80px;
    }

    /* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
    @media screen and (max-height: 450px) {
        .overlay a {
            font-size: 14px
        }

        .overlay .closebtn {
            font-size: 40px;
            top: 15px;
            right: 35px;
        }
    }
</style>


      <!-- X botton in nav -->
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>

      <!-- in nav -->
      <div class="overlay-content">
           <a href="${Home}">Home</a>
            <a href="${Search}">Search</a>
            <a href="${News}">News</a>
            <a href="${Login}">Login/Logout</a>
            <a href="${Favorite}">Favorite</a>
            <a href="${Product}">Product</a>
            <a href="${Team}">Team</a>
            <a href="${Account}">Account</a>
      </div>

  </nav>



`

document.getElementById('navInit').innerHTML = nav

if(isLogin){
    document.getElementById('login').innerHTML = `<a class="nav-link" href="${Logout}">Logout</a>`
}else{
    document.getElementById('login').innerHTML =  `<a class="nav-link" href="${Login}">Login</a>`
}
