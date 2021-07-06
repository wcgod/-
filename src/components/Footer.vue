<template>
    <footer class="bg-dark" id="tempaltemo_footer">
        <div class="container">
            <div class="row">

                <div class="col-md-4 pt-5">
                    <h2 class="h2 text-success border-bottom pb-3 border-light logo">WC SHOP</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <li>
                            <i class="fas fa-map-marker-alt fa-fw"></i>
                            인천광역시 미추홀구 토금남로 55
                        </li>
                        <li>
                            <i class="fa fa-phone fa-fw"></i>
                            <a class="text-decoration-none" href="tel:010-2230-6262">010-2230-6262</a>
                        </li>
                        <li>
                            <i class="fa fa-envelope fa-fw"></i>
                            <a class="text-decoration-none" href="mailto:dngamo@naver.com">dngamo@naver.com</a>
                        </li>
                    </ul>
                </div>

                <div class="col-md-4 pt-5">
                    <h2 class="h2 text-light border-bottom pb-3 border-light">Products</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <li><a class="text-decoration-none" href="#">Java</a></li>
                        <li><a class="text-decoration-none" href="#">Javascript</a></li>
                        <li><a class="text-decoration-none" href="#">Spring</a></li>
                        <li><a class="text-decoration-none" href="#">SQL</a></li>
                        <li><a class="text-decoration-none" href="#">Git</a></li>
                        <li><a class="text-decoration-none" href="#">Nexacro</a></li>
                    </ul>
                </div>

                <div class="col-md-4 pt-5">
                    <h2 class="h2 text-light border-bottom pb-3 border-light">Info</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <router-link :to="{name: 'home'}" tag="li" active-class="sale-noti" exact>
                            <a class="text-decoration-none">Home</a>
                        </router-link>
                        <router-link :to="{name: 'shop'}" tag="li" active-class="sale-noti" exact>
                            <a class="text-decoration-none">Shop</a>
                        </router-link>
                        <router-link :to="{name: 'contact'}" tag="li" active-class="sale-noti" exact>
                            <a class="text-decoration-none">Contact</a>
                        </router-link>
                    </ul>
                </div>

            </div>

            <div class="row text-light mb-4">
                <div class="col-12 mb-3">
                    <div class="w-100 my-3 border-top border-light"></div>
                </div>
            </div>
        </div>

        <div class="w-100 bg-black py-3">
            <div class="container">
                <div class="row pt-2">
                    <div class="col-12">
                        <p class="text-left text-light">
                            Copyright &copy; 2021 WooCheol Shin
                            | Designed by <a rel="sponsored" href="https://templatemo.com" target="_blank">TemplateMo</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </footer>
</template>
<script>
    export default {

    }
</script>
