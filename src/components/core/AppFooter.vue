<template>
    <v-footer color="transparent" absolute>
        <v-spacer />
        <div>
            &copy;
            {{  year }},
            Made by <v-icon icon="mdi-vuetify" />
            <a href="https://gunmong.netlify.app/">{{ author }}
            </a>
        </div>
    </v-footer>
    </template>
    
    <script>
    export default{
        props:{
            author: String
        },
        data(){
            return {
                year: ''
            }
        },
        mounted(){
            this.getCurrentYear()
        },
        methods: {
            getCurrentYear() {
                let myDate = new Date()
                this.year = myDate.getFullYear()
            }
        }
    
    }
    </script>
    <style>
    </style>