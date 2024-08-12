import { defineStore } from 'pinia'

import { initSubCategory } from '~/composables/init'

export const useSubCategoryStore = defineStore('sub-category', () => {
  // Pagination
  const paginationOptions = ref<Pagination>({
    groupBy: [],
    itemsPerPage: 10,
    page: 1,
    sortBy: []
  })

  const toasterStore = useToasterStore()

  const subCategories = ref<SubCategory[]>([])

  const subCategory = ref<SubCategory>(initSubCategory())

  const subCategoriesTotalCount = ref<number>(0)

  const reset = () => (subCategory.value = initSubCategory())

  const list = async (): Promise<void> => {
    try {
      const res = await api('category/sub-category', {
      })

      subCategories.value = res?.data

      // total count
      subCategoriesTotalCount.value = res.count
    } catch (err) {}
  }

  const get = async (id: number): Promise<SubCategory> => {
    const res = await api(`category/sub-category/${id}`)
    
    subCategory.value = res?.data

    return subCategory.value
  }

  const create = async (categoryId: number): Promise<void> => {
    try {
      await api(`category/sub-category/store`, {
        method: 'post',
        body: {
          name: subCategory.value.name,
          category_id: categoryId
        }
      })

      // relist
      await list()

      toasterStore.showSuccessToaster('تم إضافة التصنيف الفرعي بنجاح')
    } catch (error) {
      throw error
    }
  }

  const update = async (id: number): Promise<void> => {
    try {
      await api(`category/sub-category/${id}`, {
        method: 'put',
        body: {
          name: subCategory.value.name
        }
      })

      // relist
      await list()

      toasterStore.showSuccessToaster('تم تعديل التصنيف الفرعي بنجاح')
    } catch (error) {
      throw error
    }
  }

  const remove = async (id: number): Promise<void> => {
    try {
      await api(`category/sub-category/${id}`, {
        method: 'delete',
        body: {
          name: subCategory.value.name
        }
      })

      // relist
      await list()

      toasterStore.showSuccessToaster('تم تعديل التصنيف الفرعي بنجاح')
    } catch (error) {
      throw error
    }
  }

  return {
    paginationOptions,
    subCategories,
    subCategory,
    subCategoriesTotalCount,
    reset,
    get,
    list,
    create,
    update,
    remove,
  }
})
