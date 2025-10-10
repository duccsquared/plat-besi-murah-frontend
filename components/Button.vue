<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
    @click="handleClick"
  >
    <i 
      v-if="loading" 
      class="bi bi-arrow-clockwise spinning"
      :class="$slots.default ? 'me-2' : ''"
    ></i>
    <i 
      v-else-if="icon" 
      :class="`bi ${icon}` + ($slots.default ? ' me-2' : '')"
    ></i>
    <slot/>
  </button>
</template>

<script setup>
import { computed, useSlots } from 'vue'
const slots = useSlots();

// Props
const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: 'orange',
    validator: (value) => ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'gray'].includes(value)
  },
  type: {
    type: String,
    default: 'button'
  },
  loading: {
    type: Boolean,
    default: false
  },
  class: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  // New props to handle common style overrides
  fontWeight: {
    type: String,
    default: 'medium', // medium, normal, semibold, bold
    validator: (value) => ['normal', 'medium', 'semibold', 'bold'].includes(value)
  },
  size: {
    type: String,
    default: 'md', // sm, md, lg
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  }
})

// Emits
const emit = defineEmits(['click'])

// Handle click event
const handleClick = (event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}

// Predefined color variants to ensure Tailwind generates them
const colorVariants = computed(() => {
  const variants = {
    // Bootstrap-like semantic colors
    primary: {
      base: 'bg-primary-600 text-white',
      hover: 'hover:bg-primary-700',
      dark: 'dark:bg-primary-500 dark:hover:bg-primary-400'
    },
    secondary: {
      base: 'bg-secondary-600 text-white',
      hover: 'hover:bg-secondary-700',
      dark: 'dark:bg-secondary-500 dark:hover:bg-secondary-400'
    },
    // Tailwind color palette
    red: {
      base: 'bg-red-600 text-white',
      hover: 'hover:bg-red-700',
      dark: 'dark:bg-red-500 dark:hover:bg-red-400'
    },
    orange: {
      base: 'bg-orange-600 text-white',
      hover: 'hover:bg-orange-700',
      dark: 'dark:bg-orange-500 dark:hover:bg-orange-400'
    },
    amber: {
      base: 'bg-amber-500 text-gray-900',
      hover: 'hover:bg-amber-600',
      dark: 'dark:bg-amber-400 dark:hover:bg-amber-300'
    },
    yellow: {
      base: 'bg-yellow-500 text-gray-900',
      hover: 'hover:bg-yellow-600',
      dark: 'dark:bg-yellow-400 dark:hover:bg-yellow-300'
    },
    lime: {
      base: 'bg-lime-600 text-white',
      hover: 'hover:bg-lime-700',
      dark: 'dark:bg-lime-500 dark:hover:bg-lime-400'
    },
    green: {
      base: 'bg-green-600 text-white',
      hover: 'hover:bg-green-700',
      dark: 'dark:bg-green-500 dark:hover:bg-green-400'
    },
    emerald: {
      base: 'bg-emerald-600 text-white',
      hover: 'hover:bg-emerald-700',
      dark: 'dark:bg-emerald-500 dark:hover:bg-emerald-400'
    },
    teal: {
      base: 'bg-teal-600 text-white',
      hover: 'hover:bg-teal-700',
      dark: 'dark:bg-teal-500 dark:hover:bg-teal-400'
    },
    cyan: {
      base: 'bg-cyan-600 text-white',
      hover: 'hover:bg-cyan-700',
      dark: 'dark:bg-cyan-500 dark:hover:bg-cyan-400'
    },
    sky: {
      base: 'bg-sky-600 text-white',
      hover: 'hover:bg-sky-700',
      dark: 'dark:bg-sky-500 dark:hover:bg-sky-400'
    },
    blue: {
      base: 'bg-blue-600 text-white',
      hover: 'hover:bg-blue-700',
      dark: 'dark:bg-blue-500 dark:hover:bg-blue-400'
    },
    indigo: {
      base: 'bg-indigo-600 text-white',
      hover: 'hover:bg-indigo-700',
      dark: 'dark:bg-indigo-500 dark:hover:bg-indigo-400'
    },
    violet: {
      base: 'bg-violet-600 text-white',
      hover: 'hover:bg-violet-700',
      dark: 'dark:bg-violet-500 dark:hover:bg-violet-400'
    },
    purple: {
      base: 'bg-purple-600 text-white',
      hover: 'hover:bg-purple-700',
      dark: 'dark:bg-purple-500 dark:hover:bg-purple-400'
    },
    fuchsia: {
      base: 'bg-fuchsia-600 text-white',
      hover: 'hover:bg-fuchsia-700',
      dark: 'dark:bg-fuchsia-500 dark:hover:bg-fuchsia-400'
    },
    pink: {
      base: 'bg-pink-600 text-white',
      hover: 'hover:bg-pink-700',
      dark: 'dark:bg-pink-500 dark:hover:bg-pink-400'
    },
    rose: {
      base: 'bg-rose-600 text-white',
      hover: 'hover:bg-rose-700',
      dark: 'dark:bg-rose-500 dark:hover:bg-rose-400'
    },
    gray: {
      base: 'bg-gray-600 text-white',
      hover: 'hover:bg-gray-700',
      dark: 'dark:bg-gray-500 dark:hover:bg-gray-400'
    }
  }
  
  return variants[props.color] || variants.primary
})

// Size variants
const sizeClasses = computed(() => {
  const sizes = {
    sm: {
      padding: slots.default ? 'px-3 py-1.5' : 'px-1.5',
      text: 'text-sm'
    },
    md: {
      padding: slots.default ? 'px-6 py-2' : 'px-2',
      text: 'text-base'
    },
    lg: {
      padding: slots.default ? 'px-8 py-3' : 'px-3',
      text: 'text-lg'
    }
  }
  
  return sizes[props.size] || sizes.md
})

// Font weight classes
const fontWeightClass = computed(() => {
  const weights = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  }
  
  return weights[props.fontWeight] || weights.medium
})

// Combined button classes
const buttonClasses = computed(() => {
  const isDisabled = props.disabled || props.loading
  
  return [
    // Base classes that rarely need overriding
    'rounded-md transition-colors duration-200 flex items-center justify-center',
    
    // Size and font classes (can be overridden by props)
    sizeClasses.value.padding,
    sizeClasses.value.text,
    fontWeightClass.value,
    
    // Color classes (disabled state overrides these)
    isDisabled ? [
      'bg-gray-300 text-gray-500 cursor-not-allowed',
      'dark:bg-gray-600 dark:text-gray-400'
    ] : [
      colorVariants.value.base,
      colorVariants.value.hover,
      colorVariants.value.dark,
      'cursor-pointer'
    ],
    
    // Custom classes from prop (applied last to allow overrides)
    props.class
  ]
})
</script>

<style scoped>
.spinning {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>