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
              :error-messages="usernameError"
            ></v-text-field>
            <v-text-field
              label="Password"
              type="password"
              outlined
              v-model="password"
              :error-messages="passwordError"
            ></v-text-field>
          </v-card-text>
          <v-card-actions class="d-flex flex-column justify-center">
            <v-btn block variant="outlined" @click="login">Sign Up</v-btn>
            <div>Already have an account? <a href="/register">Log In</a></div>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script setup>
import { useStorage } from "@vueuse/core"
import { ref } from "vue"

const username = ref("")
const password = ref("")
const usernameError = ref("")
const passwordError = ref("")
const token = useStorage("token")

const validateInputs = () => {
  usernameError.value = username.value ? "" : "Username is required"
  passwordError.value = password.value ? "" : "Password is required"
  return !usernameError.value && !passwordError.value
}

const login = async () => {
  if (!validateInputs()) return

  try {
    const response = await fetch("/api/auth/register", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    })

    const data = await response.json()

    if (response.ok) {
      // Redirect to dashboard or home page
      console.log(data, "data")
      navigateTo("/login")
    } else {
      passwordError.value = data.message || "Invalid username or password"
    }
  } catch (error) {
    console.error("Login error:", error)
    passwordError.value = "Server error. Please try again later."
  }
}
</script>

<style scoped>
.v-container {
  min-height: 100vh;
}
</style>
