```sql
create table
  public.destinations (
    id uuid not null default gen_random_uuid (),
    created_at timestamp with time zone null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone null,
    slug character varying(255) not null,
    name character varying(255) null,
    tagline character varying(255) null,
    description text null,
    highlights jsonb null,
    transport jsonb null default '{"road": true, "water": false, "airport": false}'::jsonb,
    district character varying(255) null,
    category character varying(255) null default 'tourist attraction'::character varying,
    images jsonb null default '[{"imageUrl": "", "imageTitle": "", "imageBlurHash": ""}]'::jsonb,
    address character varying(255) null,
    address_g_link text null,
    tags text[] null,
    timing jsonb null default '{"all": [{"day": "Monday", "time": {"open": "09:00", "close": "17:00"}}, {"day": "Tuesday", "time": {"open": "09:00", "close": "17:00"}}, {"day": "Wednesday", "time": {"open": "09:00", "close": "17:00"}}, {"day": "Thursday", "time": {"open": "09:00", "close": "17:00"}}, {"day": "Friday", "time": {"open": "09:00", "close": "17:00"}}, {"day": "Saturday", "time": {"open": "09:00", "close": "17:00"}}, {"day": "Sunday", "time": {"open": "09:00", "close": "17:00"}}]}'::jsonb,
    ticket jsonb null default '{"All": [{"type": "Ticket", "price": "Nil"}]}'::jsonb,
    parking jsonb null default '[{"type": "Parking", "price": "Nil"}]'::jsonb,
    distance jsonb null default '[{"link": "", "distance": "x from Tura"}, {"link": "", "distance": "x km from Shillong"}, {"link": "", "distance": "x km from Guwahati"}]'::jsonb,
    activities text[] null,
    best_time_to_visit jsonb null default '{"months": [], "season": ""}'::jsonb,
    safety_tips text[] null,
    emergency_contacts jsonb null,
    nearby_attractions text[] null,
    is_active boolean null default true,
    embedding extensions.vector null,
    coordinate double precision[] null,
    constraint destinations_pkey1 primary key (id)
  ) tablespace pg_default;

create trigger handle_updated_at before
update on destinations for each row
execute function extensions.moddatetime ('updated_at');
```