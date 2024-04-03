<template>
  <div class="pandora-login">
    <div class="pandora-login__form">
      <div class="pandora-login__logo">PANDORA3 PACKAGE</div>
      <InputText
        type="text"
        class="p-inputtext-lg w-full"
        placeholder="아이디"
      />
      <InputText
        type="password"
        class="p-inputtext-lg w-full"
        placeholder="비밀번호"
      />
      <div class="pandora-login-save">
        <div class="pandora-login-save__check">
          <Checkbox
            v-model="checkSave"
            inputId="checkSave1"
            name="checkSave"
            value="d"
          />
          <label for="checkSave1" class="ml-2">아이디저장</label>
        </div>
        <div class="pandora-login-save__text">
          <RouterLink to="/login">아이디/비밀번호찾기</RouterLink>
        </div>
      </div>
      <div class="pandora-login__button">
        <Button label="로그인" class="p-button-lg w-full" />
        <Button label="회원가입" class="p-button-lg w-full" outlined />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const checkSave = ref();
</script>
