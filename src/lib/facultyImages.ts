const FACULTY_IMAGE_VERSION = "2026-05-03-philong";

export const withFacultyImageVersion = (src: string) => {
  const separator = src.includes("?") ? "&" : "?";
  return `${src}${separator}v=${FACULTY_IMAGE_VERSION}`;
};