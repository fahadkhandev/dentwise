import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function generateAvatar(name: string, gender: 'MALE' | 'FEMALE') {
    const username = name.replace(/\s+/g, '').toLowerCase()
    const base = 'https://avatar.iran.liara.run/public'
    if (gender === 'FEMALE') return `${base}/girl?username=${username}`
    // default to boy
    return `${base}/boy?username=${username}`
}

// phone formatting function for US numbers - ai generated 🎉
// export const formatPhoneNumber = (value: string) => {
//     if (!value) return value

//     const phoneNumber = value.replace(/[^\d]/g, '')
//     const phoneNumberLength = phoneNumber.length

//     if (phoneNumberLength < 4) return phoneNumber
//     if (phoneNumberLength < 7) {
//         return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
//     }
//     return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
//         3,
//         6
//     )}-${phoneNumber.slice(6, 10)}`
// }
export const formatPhoneNumber = (value: string) => {
    if (!value) return ''

    // Keep only digits
    let digits = value.replace(/[^\d]/g, '')

    // If user typed international prefix with double zero (e.g. 0092...), remove it
    if (digits.startsWith('00')) {
        digits = digits.slice(2)
    }

    // If it now starts with country code 92 (e.g. +92 or pasted 92...), remove it
    if (digits.startsWith('92')) {
        digits = digits.slice(2)
    }

    // If it starts with a single leading zero (local format 03...), remove that single zero
    if (digits.startsWith('0')) {
        digits = digits.slice(1)
    }

    // Now digits should be the 10-digit local part like 3XXXXXXXXX
    // Enforce max length of 10
    digits = digits.slice(0, 10)

    const len = digits.length
    if (len === 0) return ''
    if (len <= 3) return `+92 ${digits}`
    if (len <= 6) return `+92 ${digits.slice(0, 3)} ${digits.slice(3)}`
    return `+92 ${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(
        6,
        10
    )}`
}

//  ai generated 🎉
export const getNext5Days = () => {
    const dates = []
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)

    for (let i = 0; i < 5; i++) {
        const date = new Date(tomorrow)
        date.setDate(date.getDate() + i)
        dates.push(date.toISOString().split('T')[0])
    }

    return dates
}

export const getAvailableTimeSlots = () => {
    return [
        '09:00',
        '09:30',
        '10:00',
        '10:30',
        '11:00',
        '11:30',
        '14:00',
        '14:30',
        '15:00',
        '15:30',
        '16:00',
        '16:30',
    ]
}

export const APPOINTMENT_TYPES = [
    {
        id: 'checkup',
        name: 'Regular Checkup',
        duration: '60 min',
        price: '$120',
    },
    {
        id: 'cleaning',
        name: 'Teeth Cleaning',
        duration: '45 min',
        price: '$90',
    },
    {
        id: 'consultation',
        name: 'Consultation',
        duration: '30 min',
        price: '$75',
    },
    {
        id: 'emergency',
        name: 'Emergency Visit',
        duration: '30 min',
        price: '$150',
    },
]
