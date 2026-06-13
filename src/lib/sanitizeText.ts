export const sanitizeText = (value: string) => {
  return value.trim().replace(/\s+/g, " ").replace(/[<>]/g, "");
};

export const sanitizeEmail = (email: string) => {
  return sanitizeText(email).toLowerCase();
};

export const sanitizePhone = (phone: string) => {
  return phone.replace(/\D/g, "");
};

export interface ApplicationFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  direction?: string;
  description?: string;
}

export const sanitizeApplicationData = (
  data: ApplicationFormData,
): ApplicationFormData => ({
  name: sanitizeText(data.name),
  company: sanitizeText(data.company),
  phone: sanitizePhone(data.phone),
  email: sanitizeEmail(data.email),
  direction: sanitizeText(data.direction ?? ""),
  description: sanitizeText(data.description ?? ""),
});
