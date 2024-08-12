export interface ListResponse<T> {
  data: T[];
}
export interface User {
  id?: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  role: string;
  role_id?: number;
}
export interface Industry {
  id?: number;
  name: string;
}
export interface Category {
  id?: number;
  name: string;
  sub_categories: SubCategory[];
}
export interface SubCategory {
  id?: number;
  name: string;
}
export interface Company {
  id?: number;
  profile_image_url: string;
  profile_image_id?: number;
  background_image_url: string;
  background_image_id?: number;
  verified_at: string | null;
  username?: string | null;
  name: string | null;
  description: string | null;
  size: string | null;
  industry_name: string | null;
  city: string;
  region: string;
  street_address: string;
  gallery_images: { id: number; url: string }[];
  gallery_images_ids: { id: number; url: string }[];
  contact_links: string[];
  company_phones: string[];
}

export interface Offer {
  industry_name: string;
  job_role?: {
    id: number;
    name: string;
  };
  job_role_id: number;
  location_type: 'remotly' | 'on-site';
  attendence_type: 'part-time' | 'full-time';
  max_salary: number;
  min_salary: number;
  max_age: number;
  min_age: number;
  description: string;
  transportation: boolean;
  health_insurance: boolean;
  military_service: boolean;
  gender: 'male' | 'female' | null;
  skills: string[];
  age_required?: boolean;
  military_service_required?: boolean;
  gender_required?: boolean;
  status: 'pending' | 'active' | 'cloused';
  created_at?: string;
  company?: Company;
}

export interface OfferFilters {
  status?: 'active' | 'cloused';
  location_type?: 'on-site' | 'remotly';
  attendence_type?: 'full-time' | 'part-time' | 'intern';
  gender?: 'male' | 'female';
  industry_name?: string;
  company_id?: number;
  job_role_id?: number;
  transportation?: boolean;
  health_insurance?: boolean;
  military_service?: boolean;
  max_salary?: number;
  min_salary?: number;
  max_age?: number;
  min_age?: number;
  i_can_apply_for_it?: boolean;
}

export interface Employee {
  id?: number;
  user?: User;
  headline: string;
  description: string;
  city: string;
  gender: 'male' | 'female' | 'unknown';
  date_of_birth: string;
  job_role_id?: number;
  job_role?: {
    id: number;
    name: string;
  };
  skill_ids: number[];
  skills?: Skill[];
  profile_image_id: number;
  profile_image_url: string;
  background_image_id: number;
  background_image_url: string;
}

export interface Job {
  id?: number;
  name: string;
}

export interface Skill {
  id?: number;
  name: string;
}

export interface OffersFilters {
  location_type?: 'remotly' | 'on-site';
  attendence_type?: 'part-time' | 'full-time';
  status?: 'pending' | 'active' | 'cloused';
  job_role_id?: number;
}

export interface Client {
  id?: number;
  username: string;
  gender: 'male' | 'female';
  city: string;
  date_of_birth: string;
  profile_image_id: number;
  background_image_id: number;
  profile_image_url: null | string;
  background_image_url: null | string;
  user?: User;
  created_at: string;
}

export interface ClientOffer {
  id?: number;
  client_id?: number;
  client?: Client;
  category_id: number;
  category?: Category;
  sub_category?: SubCategory;
  sub_category_id: number;
  title: string;
  description: string;
  min_price: string;
  max_price: string;
  days: string;
  skill_ids: number[];
  skills?: Skill[];
  file_ids: number[];
  files?: File[];
  created_at?: string;
  status?: 'pending' | 'active' | 'cloused' | 'in_progress' | 'done';
}

export interface ClientOfferFilters {
  status: 'active' | 'cloused' | 'done';
  sub_category_id?: number;
  skill_ids?: number[];
  min_days?: number;
  max_days?: number;
  min_price?: number;
  max_price?: number;
}

export interface Proposal {
  freelancer?: Employee;
  id?: number;
  client_offer_id: number;
  message: string;
  days: number;
  price: number;
}

export interface Chat {
  id?: number;
  owner: User;
  msg: string;
  date: string;
}

// Admin
export interface Pagination {
  groupBy: string[]
  itemsPerPage: number
  page: number
  sortBy: { key: string; order: 'asc' | 'desc' }[]
}
export interface Header {
  title: string
  key: string
  align?: 'start' | 'center' | 'end'
  sortable?: boolean
}

export interface SubCategory {
  id: number | null;
  name: string | null;
  category_id?: number | null;
}

export interface Category {
    id: number | null;
    name: string | null;
    sub_categories: SubCategory[];
  }
