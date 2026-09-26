const FACULTY_IMAGE_VERSION = "2026-09-26-cliff";

export const withFacultyImageVersion = (src: string) => {
  const separator = src.includes("?") ? "&" : "?";
  return `${src}${separator}v=${FACULTY_IMAGE_VERSION}`;
};