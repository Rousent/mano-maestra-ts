export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      estudiantes: {
        Row: {
          id_nivel: number
          id_usuario: string
        }
        Insert: {
          id_nivel: number
          id_usuario: string
        }
        Update: {
          id_nivel?: number
          id_usuario?: string
        }
        Relationships: [
          {
            foreignKeyName: "estudiantes_id_nivel_fkey"
            columns: ["id_nivel"]
            referencedRelation: "niveles"
            referencedColumns: ["id_nivel"]
          },
          {
            foreignKeyName: "estudiantes_id_usuario_fkey"
            columns: ["id_usuario"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      lecciones: {
        Row: {
          id_leccion: string
          id_nivel: number
          titulo: string
        }
        Insert: {
          id_leccion: string
          id_nivel: number
          titulo: string
        }
        Update: {
          id_leccion?: string
          id_nivel?: number
          titulo?: string
        }
        Relationships: [
          {
            foreignKeyName: "lecciones_id_nivel_fkey"
            columns: ["id_nivel"]
            referencedRelation: "niveles"
            referencedColumns: ["id_nivel"]
          }
        ]
      }
      lecciones_completadas: {
        Row: {
          id_leccion: string
          id_leccion_completada: number
          id_usuario: string
        }
        Insert: {
          id_leccion: string
          id_leccion_completada?: number
          id_usuario: string
        }
        Update: {
          id_leccion?: string
          id_leccion_completada?: number
          id_usuario?: string
        }
        Relationships: [
          {
            foreignKeyName: "lecciones_completadas_id_leccion_fkey"
            columns: ["id_leccion"]
            referencedRelation: "lecciones"
            referencedColumns: ["id_leccion"]
          },
          {
            foreignKeyName: "lecciones_completadas_id_usuario_fkey"
            columns: ["id_usuario"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      niveles: {
        Row: {
          descripcion: string
          id_nivel: number
        }
        Insert: {
          descripcion: string
          id_nivel?: number
        }
        Update: {
          descripcion?: string
          id_nivel?: number
        }
        Relationships: []
      }
      perfiles: {
        Row: {
          apellido_materno: string
          apellido_paterno: string
          id_rol: number
          id_usuario: string
          nombres: string
        }
        Insert: {
          apellido_materno: string
          apellido_paterno: string
          id_rol: number
          id_usuario: string
          nombres: string
        }
        Update: {
          apellido_materno?: string
          apellido_paterno?: string
          id_rol?: number
          id_usuario?: string
          nombres?: string
        }
        Relationships: [
          {
            foreignKeyName: "perfiles_id_rol_fkey"
            columns: ["id_rol"]
            referencedRelation: "roles"
            referencedColumns: ["id_rol"]
          },
          {
            foreignKeyName: "perfiles_id_usuario_fkey"
            columns: ["id_usuario"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      roles: {
        Row: {
          descripcion: string
          id_rol: number
        }
        Insert: {
          descripcion: string
          id_rol?: number
        }
        Update: {
          descripcion?: string
          id_rol?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      change_user_password: {
        Args: {
          current_plain_password: string
          new_plain_password: string
        }
        Returns: Json
      }
      create_user_profile: {
        Args: {
          _email: string
          _nombres: string
          _paterno: string
          _materno: string
          _rol: number
        }
        Returns: undefined
      }
      get_full_user: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_lessons: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
