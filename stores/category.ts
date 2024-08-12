import { defineStore } from 'pinia'

import { initCategory } from '~/composables/init'

export const useCategoryStore = defineStore('category', () => {
  // Pagination
  const paginationOptions = ref<Pagination>({
    groupBy: [],
    itemsPerPage: 10,
    page: 1,
    sortBy: []
  })

  const toasterStore = useToasterStore()

  const categories = ref<Category[]>([])

  const category = ref<Category>(initCategory())

  const categoriesTotalCount = ref<number>(0)

  const reset = () => (category.value = initCategory())

  const list = async (): Promise<void> => {
    try {
      const res = await api('category/category', {
      })

      categories.value = res?.data

      // total count
      categoriesTotalCount.value = res.count
    } catch (err) {}
  }

  const get = async (id: number): Promise<Category> => {
    const res = await api(`category/category/${id}`)
    
    category.value = res?.data

    return category.value
  }

  const create = async (): Promise<void> => {
    try {
      await api(`category/category/store`, {
        method: 'post',
        body: {
          name: category.value.name
        }
      })

      // relist
      await list()

      toasterStore.showSuccessToaster('تم إضافة التصنيف بنجاح')
    } catch (error) {
      throw error
    }
  }

  const update = async (id: number): Promise<void> => {
    try {
      await api(`category/category/${id}`, {
        method: 'put',
        body: {
          name: category.value.name
        }
      })

      // relist
      await list()

      toasterStore.showSuccessToaster('تم تعديل التصنيف بنجاح')
    } catch (error) {
      throw error
    }
  }

  const remove = async (id: number): Promise<void> => {
    try {
      await api(`category/category/${id}`, {
        method: 'delete'
      })

      // relist
      await list()

      toasterStore.showSuccessToaster('تم حذف التصنيف بنجاح')
    } catch (error) {
      throw error
    }
  }

  return {
    paginationOptions,
    categories,
    category,
    categoriesTotalCount,
    reset,
    get,
    list,
    create,
    update,
    remove,
  }
})
