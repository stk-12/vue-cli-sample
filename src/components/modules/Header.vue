<template>
    <header class="header">
        <h1>Vue sample</h1>
        <nav class="gnav">
            <ul>
                <li><router-link to="/" active-class="active" exact>HOME</router-link></li>
                <li><router-link to="/about" active-class="active">ABOUT</router-link></li>
                <li><router-link to="/blog" active-class="active">BLOG</router-link></li>
                <li>CONTACT</li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .header {
        background: #333;
        h1 {
            color: #fff;
        }
        .gnav {
            ul {
                display: flex;
            }
            li {

            }
        }
    }
</style>