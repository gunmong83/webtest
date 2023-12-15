<template>
<div>
    <v-app-bar
        dense
        dark
        >
        <ul class="menu">
            <li>
                <v-btn @click="toHome">
                홈
                </v-btn>
            </li>
            <li>
                <v-btn @click="toPage1">
                생성
                </v-btn>
            </li>
            <li>
                <v-btn @click="toPage2">
                목록
                </v-btn>
            </li>
        </ul>
    </v-app-bar>
</div>
</template>

<script>
export default{

    methods:{
        toHome(){
            this.$router.push("/")
        },
        toPage1(){
            this.$router.push("/create")
        },
        toPage2(){
            this.$router.push("/table")
        }
    }
}
</script>
<style>
    ul.menu li{ display: inline;}
</style>