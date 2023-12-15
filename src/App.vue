<template>
  <v-app>
    <core-app-bar />
    <core-app-view />
    <core-app-footer author="gunmong"/>
  </v-app>
</template>

<script>
import CoreAppBar from '@/components/core/AppBar'
import CoreAppView from '@/components/core/AppView'
import CoreAppFooter from '@/components/core/AppFooter'


export default {
  name: 'App',

  components: {
    CoreAppBar,
    CoreAppView,
    CoreAppFooter
  },
};
</script>
