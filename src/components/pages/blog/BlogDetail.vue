<template>
    <div>
        <p>blog no.{{ id }}</p>

        <ul>
            <li><router-link to="/blog/1">記事1</router-link></li>
            <li><router-link to="/blog/2">記事2</router-link></li>
        </ul>

        <router-link :to="{ name: 'blog-detail', params: {id: Number(id) - 1}}">前の記事</router-link>
        <router-link :to="{ name: 'blog-detail', params: {id: Number(id) + 1}}">次の記事</router-link>
        <p @click="toList">一覧へ戻る</p>
    </div>
</template>

<script>
    export default {
        props: ["id"],
        methods: {
            toList() {
                this.$router.push({ path: "../blog" });
            }
        }
    }
</script>