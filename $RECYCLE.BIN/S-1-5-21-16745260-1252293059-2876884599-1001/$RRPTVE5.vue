<script lang="ts">
import * as yup from 'yup';
import Vue from 'vue';
import { Component, Prop, State } from 'nuxt-property-decorator';
import { BFormCheckbox } from 'bootstrap-vue';
import { requestLogin } from '../dispatchs';
import { Obj } from '~/interface';
import TextInput from '@/elements/TextInput/index.vue';
import Formik from '@/elements/Formik/index.vue';
import Danger from '@/assets/svg/danger.svg';
import Logo from '@/assets/svg/logo2.svg';
import Vi from '@/assets/svg/vi.svg';
import WarningIcon from '@/assets/svg/info-circle3.svg';

import './style.scss';

@Component({
  components: {
    Formik,
    TextInput,
    BFormCheckbox,
    Danger,
    Logo,
    Vi,
    WarningIcon,
  },
})
class LoginPassword extends Vue {
  @Prop({ type: String }) componentId!: string;
  @State('loginResult') loginResult?: Record<string, unknown>;
  @Prop({ type: Function, required: true }) changeShowLogin!: () => void;

  schema = yup.object().shape({
    username: yup.string().required('Required'),
    password: yup
      .string()
      // .min(8, 'The password is invalid')
      .required('The password is invalid'),
  });

  onSubmit(values: Obj) {
    this.$store.dispatch(requestLogin(values, this.componentId));
  }

  forgot() {
    console.log('forgot');
  }

  showOpenAccount() {
    console.log('open account');
  }

  get errorMessage() {
    if (this.loginResult == null || this.loginResult.success) {
      return null;
    } else {
      return this.$t((this.loginResult.error as Record<string, string>).code);
    }
  }
}

export default LoginPassword;
</script>

<template>
  <formik v-slot="{ isValid, values, handleSubmit, errors, touched, handleBlur }" class="login-password" :validationSchema="schema" :initialValues="{ username: '' }" :onSubmit="onSubmit">
    <TextInput v-model="values.username" class="mb-5" name="username" label="Enter your Email or Account No" :onBlur="handleBlur" :hasError="errors.username != null && touched.username" :errorMessage="errors.username" />
    <TextInput v-model="values.password" class="mb-4" name="password" type="password" :onBlur="handleBlur" label="Enter your Password" :hasError="errors.password != null && touched.password" :errorMessage="errors.password" />

    <div class="check-box-section mb-4">
      <b-form-checkbox :checked="true">Save username</b-form-checkbox>
    </div>
    <div class="btn-section mb-4">
      <button :disabled="!isValid" class="btn-login" type="button" @click="handleSubmit">Login</button>
    </div>
    <div v-if="errorMessage" class="invalid-message mb-4"><Danger /> {{ errorMessage }}</div>
    <div class="footer">
      <p @click="showOpenAccount">Open Account</p>
      <p @click="changeShowLogin">Forgot username/<br />password?</p>
    </div>
    <Modal :dialogClass="'perfomenace-modal'" :show="isNext" size="sm">
      <div class="openAccount">
        <div class="logo">
          <Logo />
          <div class="register">Register New Account</div>
          <div class="choose">Please choose one of the two methods below</div>
        </div>
        <div class="QR-phonge">
          <div class="QR">
            <div>
              <div class="code">1. Scan QR code</div>
              <div class="title">Scan the QR code to download the JBSV app and open an account on the app.</div>
            </div>
            <div><Logo /></div>
          </div>
          <div class="phone">
            <div>
              <div class="code">2. Enter your phone number</div>
              <div class="title">JBSV will send a link to download the app to your phone number.</div>
            </div>
            <div>
              <div class="number">
                <div><Vi />+84</div>
                <input placeholder="000-000-000" type="number" />
              </div>
              <div class="error">The phone number is invalid.</div>
              <button class="btn">Next</button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
    <Modal :dialogClass="'perfomenace-modal'" :show="true" size="sm">
      <div class="waringAccount">
        <div class="waring">
          <WarningIcon />
          <div class="note">Notice</div>
          <div class="title">JBSV has sent a link to download the app to your phone number. Please check your phone message. Thank you!</div>
        </div>
        <button class="btn">Ok</button>
      </div>
    </Modal>
  </formik>
</template>
