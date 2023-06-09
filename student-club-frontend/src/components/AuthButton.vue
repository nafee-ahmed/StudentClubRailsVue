<template>
  <button
    class="w-full text-white bg-gradient-to-br from-purple-600 to-primaryColor hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 disabled:opacity-50"
    type="submit"
    :disabled="isDisabled"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ["text", "isDisabled"],
};
</script>
