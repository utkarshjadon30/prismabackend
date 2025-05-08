<template>
  <v-container class="d-flex justify-center align-center" fluid>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="12" md="6" lg="4">
        <v-card class="pa-6" elevation="6">
          <v-card-title class="text-center">Tracker App</v-card-title>
          <v-card-text>
            <v-text-field
              label="Username"
              v-model="username"
              outlined
            ></v-text-field>
            <v-text-field
              label="Password"
              type="password"
              outlined
              v-model="password"
            ></v-text-field>
          </v-card-text>
          <v-card-actions class="d-flex flex-column justify-center">
            <v-btn block variant="outlined">Login</v-btn>
            <div>Dont have an account <a href="/regsiter">Sign up</a></div>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script setup>
const username = ref("")
const password = ref(null)
</script>

<style scoped>
.v-container {
  min-height: 100vh;
}
</style>
