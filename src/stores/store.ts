import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Profile } from '@/types'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})


export const useProfilesStore = defineStore('profiles', () => {
  const profiles = ref<Profile[]>([])

  function addProfile(profile: Profile) {
    profiles.value.push(profile)
  }

  function fetchProfiles() {
    // Simulate fetching profiles from an API
    profiles.value = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        occupation: 'Software Engineer',
        skills: ['JavaScript', 'Vue.js', 'Node.js'],
        experience: '5 years',
        rating: 4.5,
        availability: true,
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
        occupation: 'Product Manager',
        skills: ['Product Management', 'Agile', 'Scrum'],
        experience: '3 years',
        rating: 4.0,
        availability: false,
      },
    ]
  }
  // Fetch profiles when the store is initialized
  fetchProfiles()
  // Expose the profiles and the addProfile function
  function getProfileById(id: number): Profile | undefined {
    return profiles.value.find(profile => profile.id === id)
  }
  function updateProfile(id: number, updatedProfile: Partial<Profile>) {
    const index = profiles.value.findIndex(profile => profile.id === id)
    if (index !== -1) {
      profiles.value[index] = { ...profiles.value[index], ...updatedProfile }
    }
  }

  return { profiles, addProfile, getProfileById, updateProfile }
})
