import React from 'react';
import { createClient } from '@/utils/supabase/server';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';

export default async function Notes() {
    const supabase = createClient();
    const { data: notes } = await supabase.from("notes").select();

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Notes
            </Typography>
            <Grid container spacing={3}>
                {notes && notes.length > 0 ? (
                    notes.map((note) => (
                        <Grid item xs={12} sm={6} md={4} key={note.id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {note.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {note.content}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="body1">No notes available</Typography>
                )}
            </Grid>
        </Container>
    );
}
