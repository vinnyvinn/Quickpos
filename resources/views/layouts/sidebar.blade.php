<div class="sidebar" data-color="white" data-active-color="danger">
    <!--
      Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red | yellow"
  -->
    <div class="logo">
        <a href="#" class="simple-text logo-mini">
            <div class="logo-image-small">
                <img src="{{asset('assets/images/logo-small.png')}}">
            </div>
        </a>
        <a href="#" class="simple-text logo-normal">
            Vinnyvinny
            <!-- <div class="logo-image-big">
              <img src="../assets/img/logo-big.png">
            </div> -->
        </a>
    </div>
    <div class="sidebar-wrapper">
        <ul class="nav">
            <li class="active ">
                <a href="#">
                    <i class="nc-icon nc-bank"></i>
                    <p>Dashboard</p>
                </a>
            </li>
            <li>
                <a href="{{url('/products')}}">
                    <i class="nc-icon nc-diamond"></i>
                    <p>Products</p>
                </a>
            </li>
            <li>
                <a href="{{url('/categories')}}">
                    <i class="nc-icon nc-diamond"></i>
                    <p>Categories</p>
                </a>
            </li>
            </ul>
    </div>
</div>
