<template>
  <div>
    <label :for="id" class="block mb-2 text-sm font-medium text-gray-900">{{
      labelText
    }}</label>
    <input
      :type="type"
      :id="id"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:ring-2 focus:border-blue-500 block w-full p-2.5 outline-none"
      :placeholder="placeholder"
      :required="isRequired"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: ["labelText", "id", "placeholder", "type", "isRequired", "modelValue"],
  emits: ["update:modelValue"],
};
</script>
