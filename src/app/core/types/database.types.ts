export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)";
  };
  public: {
    Tables: {
      Brands: {
        Row: {
          en_name: string;
          id: number;
          name: string;
        };
        Insert: {
          en_name: string;
          id?: number;
          name: string;
        };
        Update: {
          en_name?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      CartItems: {
        Row: {
          id: string;
          perfume_id: number;
          quantity: number;
          user_id: string;
          volume_id: number;
        };
        Insert: {
          id?: string;
          perfume_id: number;
          quantity: number;
          user_id?: string;
          volume_id: number;
        };
        Update: {
          id?: string;
          perfume_id?: number;
          quantity?: number;
          user_id?: string;
          volume_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "CartItems_perfume_id_fkey";
            columns: ["perfume_id"];
            isOneToOne: false;
            referencedRelation: "Perfumes";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "CartItems_volume_id_fkey";
            columns: ["volume_id"];
            isOneToOne: false;
            referencedRelation: "PerfumeVariants";
            referencedColumns: ["id"];
          }
        ];
      };
      Magazines: {
        Row: {
          content: string;
          cover_image: string;
          email: string | null;
          id: string;
          sub_image_1: string | null;
          sub_image_2: string | null;
          title: string;
        };
        Insert: {
          content: string;
          cover_image: string;
          email?: string | null;
          id?: string;
          sub_image_1?: string | null;
          sub_image_2?: string | null;
          title: string;
        };
        Update: {
          content?: string;
          cover_image?: string;
          email?: string | null;
          id?: string;
          sub_image_1?: string | null;
          sub_image_2?: string | null;
          title?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Magazines_email_fkey";
            columns: ["email"];
            isOneToOne: false;
            referencedRelation: "Users";
            referencedColumns: ["email"];
          }
        ];
      };
      Moods: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id?: number;
          name: string;
        };
        Update: {
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      Notes: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id?: number;
          name: string;
        };
        Update: {
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      Orders: {
        Row: {
          id: number;
          order_no: string;
          ordered_at: string;
          quantity: number;
          status: string;
          user_id: string;
          volume_id: number;
        };
        Insert: {
          id?: number;
          order_no: string;
          ordered_at: string;
          quantity: number;
          status: string;
          user_id: string;
          volume_id: number;
        };
        Update: {
          id?: number;
          order_no?: string;
          ordered_at?: string;
          quantity?: number;
          status?: string;
          user_id?: string;
          volume_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "orders_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "Users";
            referencedColumns: ["user_id"];
          },
          {
            foreignKeyName: "orders_volume_id_fkey";
            columns: ["volume_id"];
            isOneToOne: false;
            referencedRelation: "PerfumeVariants";
            referencedColumns: ["id"];
          }
        ];
      };
      PerfumeMoods: {
        Row: {
          mood_id: number;
          perfume_id: number;
        };
        Insert: {
          mood_id: number;
          perfume_id?: number;
        };
        Update: {
          mood_id?: number;
          perfume_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "PerfumeMoods_mood_id_fkey";
            columns: ["mood_id"];
            isOneToOne: false;
            referencedRelation: "Moods";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "PerfumeMoods_perfume_id_fkey";
            columns: ["perfume_id"];
            isOneToOne: false;
            referencedRelation: "Perfumes";
            referencedColumns: ["id"];
          }
        ];
      };
      PerfumeNotes: {
        Row: {
          note_id: number;
          perfume_id: number;
        };
        Insert: {
          note_id: number;
          perfume_id?: number;
        };
        Update: {
          note_id?: number;
          perfume_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "PerfumeNotes_note_id_fkey";
            columns: ["note_id"];
            isOneToOne: false;
            referencedRelation: "Notes";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "PerfumeNotes_perfume_id_fkey";
            columns: ["perfume_id"];
            isOneToOne: false;
            referencedRelation: "Perfumes";
            referencedColumns: ["id"];
          }
        ];
      };
      Perfumes: {
        Row: {
          brand_id: number;
          description: string;
          id: number;
          main_image_url: string;
          name: string;
          notes: string;
          thumbnail_url: string;
        };
        Insert: {
          brand_id: number;
          description: string;
          id?: number;
          main_image_url: string;
          name: string;
          notes: string;
          thumbnail_url: string;
        };
        Update: {
          brand_id?: number;
          description?: string;
          id?: number;
          main_image_url?: string;
          name?: string;
          notes?: string;
          thumbnail_url?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Perfumes_brand_id_fkey";
            columns: ["brand_id"];
            isOneToOne: false;
            referencedRelation: "Brands";
            referencedColumns: ["id"];
          }
        ];
      };
      PerfumeVariants: {
        Row: {
          id: number;
          perfume_id: number;
          price: number;
          variant_image_url: string;
          volume: number;
        };
        Insert: {
          id?: number;
          perfume_id: number;
          price: number;
          variant_image_url: string;
          volume: number;
        };
        Update: {
          id?: number;
          perfume_id?: number;
          price?: number;
          variant_image_url?: string;
          volume?: number;
        };
        Relationships: [
          {
            foreignKeyName: "PerfumeVariants_perfume_id_fkey";
            columns: ["perfume_id"];
            isOneToOne: false;
            referencedRelation: "Perfumes";
            referencedColumns: ["id"];
          }
        ];
      };
      Reviews: {
        Row: {
          comment: string;
          id: string;
          image_url: string | null;
          perfume_id: number;
          rating: number;
          title: string;
          user_id: string | null;
        };
        Insert: {
          comment: string;
          id?: string;
          image_url?: string | null;
          perfume_id: number;
          rating: number;
          title: string;
          user_id?: string | null;
        };
        Update: {
          comment?: string;
          id?: string;
          image_url?: string | null;
          perfume_id?: number;
          rating?: number;
          title?: string;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "Reviews_perfume_id_fkey";
            columns: ["perfume_id"];
            isOneToOne: false;
            referencedRelation: "Perfumes";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Reviews_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "Users";
            referencedColumns: ["id"];
          }
        ];
      };
      Users: {
        Row: {
          address: string | null;
          email: string | null;
          id: string;
          is_admin: boolean | null;
          login_type: string | null;
          password: string | null;
          phone: string | null;
          social_id: string | null;
          user_id: string | null;
          username: string | null;
        };
        Insert: {
          address?: string | null;
          email?: string | null;
          id?: string;
          is_admin?: boolean | null;
          login_type?: string | null;
          password?: string | null;
          phone?: string | null;
          social_id?: string | null;
          user_id?: string | null;
          username?: string | null;
        };
        Update: {
          address?: string | null;
          email?: string | null;
          id?: string;
          is_admin?: boolean | null;
          login_type?: string | null;
          password?: string | null;
          phone?: string | null;
          social_id?: string | null;
          user_id?: string | null;
          username?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      get_perfumes_public: {
        Args: Record<PropertyKey, never>;
        Returns: {
          brand: Json;
          description: string;
          id: number;
          main_image_url: string;
          moods_arr: Json;
          name: string;
          notes: string;
          notes_arr: Json;
          thumbnail_url: string;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<
  keyof Database,
  "public"
>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
      DefaultSchema["Views"])
  ? (DefaultSchema["Tables"] &
      DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
  ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
  ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never;

export const Constants = {
  public: {
    Enums: {},
  },
} as const;
