import type { ClientOffer, ClientOfferFilters, Proposal } from '~/types'

export const useClientOfferStore = defineStore('client_offer', () => {
  const offer = ref<ClientOffer>(initClientOffer())

  const offers = ref<ClientOffer[]>([])

  const proposal = ref<Proposal>(initProposal())
  const proposals = ref<Proposal[]>([])

  const filters = ref<ClientOfferFilters>(initClientOfferFilter())

  const list = async (status?: string): Promise<ClientOffer[]> => {
    const res = await api('client-offer/admin/admin-filter', {
      method: 'POST',
      body: {
        status: status || undefined
      }
    })

    offers.value = res?.data

    return offers.value
  }

  const get = async (id: number): Promise<ClientOffer> => {
    const res = await api(`client-offer/client/${id}`)

    offer.value = res?.data

    return offer.value
  }

  const listProposals = async (
    projectId: number,
    orderByDate: boolean = true,
    orderByPrice: boolean = true
  ): Promise<Proposal[]> => {
    const res = await api('client-offer/client/proposals', {
      method: 'POST',
      body: {
        client_offer_id: projectId,
        orderByPrice,
        orderByDate: orderByDate
      }
    })

    proposals.value = res?.data

    return proposals.value
  }

  return {
    offer,
    offers,
    proposal,
    proposals,
    filters,
    list,
    get,
    listProposals,
  }
})
